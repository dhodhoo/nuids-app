const GEMINI_API_KEY = "AIzaSyBmJSIloSj_JmgUEFgXmFYeDWTRktS1tAE";
const GEMINI_API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${GEMINI_API_KEY}`;

let chatHistory = [];

const SYSTEM_PROMPT = `Kamu adalah AI Assistant untuk aplikasi Nuids, sebuah aplikasi kesehatan dan gizi anak di Indonesia. 

Peranmu adalah membantu orang tua dengan informasi tentang:
- Kesehatan dan gizi anak usia 0-12 tahun
- Pencegahan stunting
- MPASI (Makanan Pendamping ASI)
- Tumbuh kembang anak
- Nutrisi dan vitamin yang diperlukan
- Tips pola makan sehat untuk anak

Jawab dengan:
1. Ramah, empati, dan mudah dipahami
2. Berdasarkan informasi kesehatan yang valid
3. Dalam Bahasa Indonesia
4. Jika pertanyaan di luar topik kesehatan anak, arahkan kembali ke topik
5. Jika ada kondisi medis serius, sarankan untuk konsultasi dengan dokter

PENTING: Kamu BUKAN pengganti dokter. Selalu ingatkan untuk konsultasi dengan tenaga medis profesional jika ada kekhawatiran serius.`;

document.addEventListener("DOMContentLoaded", () => {
  const currentUser = localStorage.getItem("currentUser");
  if (!currentUser) {
    window.location.href = "/index.html";
  }
  const chatMessages = document.getElementById("chatMessages");
  const messageInput = document.getElementById("messageInput");
  const sendBtn = document.getElementById("sendBtn");
  const typingIndicator = document.getElementById("typingIndicator");
  const clearChatBtn = document.getElementById("clearChatBtn");
  const suggestionsContainer = document.getElementById("suggestionsContainer");
  const loadingModal = document.getElementById("loadingModal");

  loadChatHistory();

  // Auto-resize textarea
  messageInput.addEventListener("input", function () {
    this.style.height = "auto";
    this.style.height = this.scrollHeight + "px";

    // Enable/disable send button
    sendBtn.disabled = this.value.trim() === "";
  });

  // Send message on Enter (Shift+Enter for new line)
  messageInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  });

  // Send button click
  sendBtn.addEventListener("click", sendMessage);

  // Clear chat button
  clearChatBtn.addEventListener("click", clearChat);

  // Suggestion buttons
  const suggestionBtns = document.querySelectorAll(".suggestion-btn");
  suggestionBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      const question = this.getAttribute("data-question");
      messageInput.value = question;
      sendBtn.disabled = false;
      sendMessage();
    });
  });

  // Function to send message
  async function sendMessage() {
    const text = messageInput.value.trim();
    if (text === "") return;

    // Hide suggestions after first message
    if (chatHistory.length === 0) {
      suggestionsContainer.style.display = "none";
    }

    // Add user message to UI
    addMessage(text, "user");

    // Clear input
    messageInput.value = "";
    messageInput.style.height = "auto";
    sendBtn.disabled = true;

    // Show typing indicator
    showTypingIndicator();

    // Send to Gemini API
    try {
      const response = await sendToGemini(text);
      hideTypingIndicator();
      addMessage(response, "ai");

      // Save chat history
      saveChatHistory();
    } catch (error) {
      hideTypingIndicator();
      addMessage(
        "Maaf, terjadi kesalahan. Silakan coba lagi. 😔\n\nError: " +
          error.message,
        "ai",
        true
      );
      console.error("Error:", error);
    }
  }

  // Function to send message to Gemini API
  async function sendToGemini(userMessage) {
    // Build context with system prompt and chat history
    const contents = [
      {
        role: "user",
        parts: [{ text: SYSTEM_PROMPT }],
      },
      {
        role: "model",
        parts: [
          {
            text: "Baik, saya siap membantu sebagai AI Assistant Nuids untuk kesehatan dan gizi anak. Saya akan memberikan informasi yang akurat, ramah, dan mudah dipahami.",
          },
        ],
      },
    ];

    // Add chat history for context
    chatHistory.forEach((msg) => {
      contents.push({
        role: msg.role === "user" ? "user" : "model",
        parts: [{ text: msg.text }],
      });
    });

    // Add current user message
    contents.push({
      role: "user",
      parts: [{ text: userMessage }],
    });

    const requestBody = {
      contents: contents,
      generationConfig: {
        temperature: 0.7,
        topK: 40,
        topP: 0.95,
        maxOutputTokens: 1024,
      },
      safetySettings: [
        {
          category: "HARM_CATEGORY_HARASSMENT",
          threshold: "BLOCK_MEDIUM_AND_ABOVE",
        },
        {
          category: "HARM_CATEGORY_HATE_SPEECH",
          threshold: "BLOCK_MEDIUM_AND_ABOVE",
        },
        {
          category: "HARM_CATEGORY_SEXUALLY_EXPLICIT",
          threshold: "BLOCK_MEDIUM_AND_ABOVE",
        },
        {
          category: "HARM_CATEGORY_DANGEROUS_CONTENT",
          threshold: "BLOCK_MEDIUM_AND_ABOVE",
        },
      ],
    };

    const response = await fetch(GEMINI_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(
        errorData.error?.message || "Failed to get response from AI"
      );
    }

    const data = await response.json();

    if (!data.candidates || data.candidates.length === 0) {
      throw new Error("No response from AI");
    }

    const aiResponse = data.candidates[0].content.parts[0].text;

    // Add to chat history
    chatHistory.push({ role: "user", text: userMessage });
    chatHistory.push({ role: "ai", text: aiResponse });

    return aiResponse;
  }

  // Function to add message to UI
  function addMessage(text, sender, isError = false) {
    const messageDiv = document.createElement("div");
    messageDiv.className = `message ${sender}-message`;

    const currentTime = getCurrentTime();

    if (sender === "ai") {
      messageDiv.innerHTML = `
        <div class="message-avatar">
          <img
              src="https://img.freepik.com/free-vector/graident-ai-robot-vectorart_78370-4114.jpg"
              alt=""
              width="100%"
              style="object-fit: cover; border-radius: 50%"
            />
        </div>
        <div class="message-bubble ${isError ? "error-bubble" : ""}">
          <div class="message-text">${formatMessage(text)}</div>
          <span class="message-time">${currentTime}</span>
        </div>
      `;
    } else {
      messageDiv.innerHTML = `
        <div class="message-bubble">
          <div class="message-text">${escapeHtml(text)}</div>
          <span class="message-time">${currentTime}</span>
        </div>
        <div class="message-avatar">
          <img
              src="https://images.unsplash.com/photo-1740252117044-2af197eea287"
              alt=""
              width="100%"
              style="object-fit: cover; border-radius: 50%"
            />
        </div>
      `;
    }

    chatMessages.appendChild(messageDiv);
    scrollToBottom();
  }

  // Format AI message (convert markdown-like syntax)
  function formatMessage(text) {
    // Trim whitespace di awal dan akhir
    text = text.trim();

    // Remove excessive whitespace (lebih dari 2 spasi berturut-turut)
    text = text.replace(/[ \t]{2,}/g, " ");

    // Remove multiple line breaks (lebih dari 2 baris kosong)
    text = text.replace(/\n{3,}/g, "\n\n");

    // Convert **bold** to <strong>
    text = text.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");

    // Convert *italic* to <em>
    text = text.replace(/\*(.*?)\*/g, "<em>$1</em>");

    // Convert numbered lists with proper formatting
    text = text.replace(
      /^(\d+)\.\s+(.+)$/gm,
      '<div class="list-item numbered">$1. $2</div>'
    );

    // Convert bullet points with proper formatting
    text = text.replace(
      /^[•\-]\s+(.+)$/gm,
      '<div class="list-item bullet">• $1</div>'
    );

    // Convert line breaks (single \n) to <br>, but preserve double line breaks
    text = text
      .split("\n\n")
      .map((paragraph) => {
        // Jika bukan list item, wrap dalam paragraph
        if (!paragraph.includes('class="list-item"')) {
          return "<p>" + paragraph.replace(/\n/g, "<br>") + "</p>";
        }
        return paragraph.replace(/\n/g, "");
      })
      .join("");

    // Clean up empty paragraphs
    text = text.replace(/<p>\s*<\/p>/g, "");
    text = text.replace(/<p><br><\/p>/g, "");

    return text;
  }

  // Escape HTML to prevent XSS
  function escapeHtml(text) {
    const div = document.createElement("div");
    div.textContent = text;
    return div.innerHTML;
  }

  // Show typing indicator
  function showTypingIndicator() {
    typingIndicator.style.display = "flex";
    scrollToBottom();
  }

  // Hide typing indicator
  function hideTypingIndicator() {
    typingIndicator.style.display = "none";
  }

  // Get current time
  function getCurrentTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    return `${hours}:${minutes}`;
  }

  // Scroll to bottom
  function scrollToBottom() {
    setTimeout(() => {
      chatMessages.scrollTop = chatMessages.scrollHeight;
    }, 100);
  }

  // Clear chat
  function clearChat() {
    if (confirm("Apakah Anda yakin ingin menghapus semua riwayat chat?")) {
      chatHistory = [];
      localStorage.removeItem("nuids_ai_chat_history");

      // Remove all messages except welcome message
      const messages = chatMessages.querySelectorAll(".message");
      messages.forEach((msg, index) => {
        if (index > 0) {
          msg.remove();
        }
      });

      // Show suggestions again
      suggestionsContainer.style.display = "block";

      alert("Riwayat chat berhasil dihapus!");
    }
  }

  // Save chat history to localStorage
  function saveChatHistory() {
    try {
      localStorage.setItem(
        "nuids_ai_chat_history",
        JSON.stringify(chatHistory)
      );
    } catch (error) {
      console.error("Failed to save chat history:", error);
    }
  }

  // Load chat history from localStorage
  function loadChatHistory() {
    try {
      const saved = localStorage.getItem("nuids_ai_chat_history");
      if (saved) {
        chatHistory = JSON.parse(saved);

        // Restore messages to UI
        if (chatHistory.length > 0) {
          suggestionsContainer.style.display = "none";

          chatHistory.forEach((msg) => {
            addMessage(msg.text, msg.role);
          });
        }
      }
    } catch (error) {
      console.error("Failed to load chat history:", error);
      chatHistory = [];
    }
  }
});
