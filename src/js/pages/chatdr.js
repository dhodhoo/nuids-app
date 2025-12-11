// Get doctor ID from URL parameter
const urlParams = new URLSearchParams(window.location.search);
const doctorId = urlParams.get("doctor");
const chatToken = urlParams.get("token");

// Doctor data (import dari doctor.js atau definisikan ulang)
const DOCTORS_DATA = {
  1: {
    id: 1,
    name: "Dr. Ujang Nurhadi, Sp.Gz",
    specialty: "Spesialis Gizi Anak",
    practice: "RS Anak Sehat",
    rating: 4.5,
    reviews: 120,
    status: "busy",
    cost: "Rp 65.000,-",
    description:
      "Dr. Ujang berpengalaman lebih dari 8 tahun dalam menangani kasus kurang gizi, alergi makanan pada anak, dan perencanaan menu tumbuh kembang optimal. Lulusan Universitas Gadjah Mada.",
    img: "https://i.pravatar.cc/150?img=50",
  },
  2: {
    id: 2,
    name: "Dr. Siti Aisyah, Sp.A",
    specialty: "Spesialis Anak",
    practice: "Klinik Tumbuh Kembang",
    rating: 4.9,
    reviews: 350,
    status: "available",
    cost: "Rp 70.000,-",
    description:
      "Dr. Siti ahli dalam pencegahan stunting dan monitoring perkembangan motorik anak. Memiliki pendekatan yang ramah dan mudah dipahami oleh orang tua. Lulusan terbaik Universitas Indonesia.",
    img: "https://i.pravatar.cc/150?img=47",
  },
  3: {
    id: 3,
    name: "Dr. Udin Supriadi, Sp.Gz",
    specialty: "Spesialis Gizi Klinis",
    practice: "Puskesmas Maju",
    rating: 4.8,
    reviews: 88,
    status: "available",
    cost: "Rp 55.000,-",
    description:
      "Dr. Udin fokus pada edukasi gizi seimbang untuk keluarga. Beliau juga aktif dalam program sosialisasi kesehatan masyarakat. Praktik sore hari.",
    img: "https://i.pravatar.cc/150?img=51",
  },
  4: {
    id: 4,
    name: "Dr. Naira S., S.Gz",
    specialty: "Ahli Gizi",
    practice: "Homecare & Online",
    rating: 4.6,
    reviews: 55,
    status: "busy",
    cost: "Rp 45.000,-",
    description:
      "Naira adalah Ahli Gizi terdaftar yang menyediakan konsultasi gizi via online, fokus pada diet khusus dan pola makan vegetarian/vegan untuk anak.",
    img: "https://i.pravatar.cc/150?img=44",
  },
  5: {
    id: 5,
    name: "Dr. Asep Marasep, S.T",
    specialty: "Spesialis Gizi Anak",
    practice: "RS Anak Sehat",
    rating: 4.5,
    reviews: 120,
    status: "available",
    cost: "Rp 65.000,-",
    description:
      "Dr. Asep berpengalaman lebih dari 8 tahun dalam menangani kasus kurang gizi, alergi makanan pada anak, dan perencanaan menu tumbuh kembang optimal. Lulusan Universitas Gadjah Mada.",
    img: "https://i.pravatar.cc/150?img=52",
  },
  6: {
    id: 6,
    name: "Dr. Siti Jannahh, S.Kom",
    specialty: "Spesialis Anak",
    practice: "Klinik Tumbuh Kembang",
    rating: 4.9,
    reviews: 350,
    status: "busy",
    cost: "Rp 70.000,-",
    description:
      "Dr. Jannah ahli dalam pencegahan stunting dan monitoring perkembangan motorik anak. Memiliki pendekatan yang ramah dan mudah dipahami oleh orang tua. Lulusan terbaik Universitas Indonesia.",
    img: "https://i.pravatar.cc/150?img=45",
  },
  7: {
    id: 7,
    name: "Dr. Jauheri Daud, Sp.Gz",
    specialty: "Spesialis Gizi Klinis",
    practice: "Puskesmas Maju",
    rating: 4.8,
    reviews: 88,
    status: "available",
    cost: "Rp 55.000,-",
    description:
      "Dr. Daud fokus pada edukasi gizi seimbang untuk keluarga. Beliau juga aktif dalam program sosialisasi kesehatan masyarakat. Praktik sore hari.",
    img: "https://i.pravatar.cc/150?img=59",
  },
  8: {
    id: 8,
    name: "Dr. Habibie S., S.Gz",
    specialty: "Ahli Gizi",
    practice: "Homecare & Online",
    rating: 4.6,
    reviews: 55,
    status: "available",
    cost: "Rp 45.000,-",
    description:
      "Habibie adalah Ahli Gizi terdaftar yang menyediakan konsultasi gizi via online, fokus pada diet khusus dan pola makan vegetarian/vegan untuk anak.",
    img: "https://i.pravatar.cc/150?img=33",
  },
};

document.addEventListener("DOMContentLoaded", () => {
  const currentUser = localStorage.getItem("currentUser");
  if (!currentUser) {
    window.location.href = "/index.html";
  }
  // IMPORTANT: Validate chat access first
  if (!validateChatAccess()) {
    return; // Stop execution if validation fails
  }
  const chatMessages = document.getElementById("chat-messages");
  const messageInput = document.getElementById("message-input");
  const sendBtn = document.getElementById("send-btn");
  const typingIndicator = document.getElementById("typing-indicator");

  loadDoctorInfo();
  loadInitialMessages();

  // Event Listeners
  sendBtn.addEventListener("click", sendMessage);
  messageInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  });

  // Validate chat access on page load
  function validateChatAccess() {
    // Check if token is provided
    if (!chatToken || !doctorId) {
      showAccessDenied(
        "Token akses tidak valid. Silakan booking terlebih dahulu."
      );
      return false;
    }

    // Validate token with storage manager
    const validation = StorageManager.validateChatAccess(doctorId, chatToken);

    if (!validation.valid) {
      showAccessDenied(validation.message);
      return false;
    }

    // Store session
    StorageManager.setActiveChatSession(
      doctorId,
      chatToken,
      validation.booking.id
    );

    // Show booking info in chat
    displayBookingInfo(validation.booking);

    return true;
  }

  // Show access denied message
  function showAccessDenied(message) {
    document.body.innerHTML = `
    <div class="access-denied-container">
      <div class="access-denied-content">
        <div class="denied-icon">
          <i class="fas fa-lock"></i>
        </div>
        <h2>Akses Ditolak</h2>
        <p>${message}</p>
        <div class="denied-actions">
          <button class="btn-primary" onclick="window.location.href='doctor.html'">
            <i class="fas fa-calendar-plus"></i> Booking Sekarang
          </button>
          <button class="btn-secondary" onclick="window.location.href='/src/pages/user/(features)/doctor.html'">
            <i class="fas fa-arrow-left"></i> Kembali
          </button>
        </div>
      </div>
    </div>
  `;
  }

  // Display booking info in chat header
  function displayBookingInfo(booking) {
    const chatHeader = document.querySelector(".chat-header");

    // Add booking info badge
    const bookingInfo = document.createElement("div");
    bookingInfo.className = "booking-info-badge";
    bookingInfo.innerHTML = `
    <i class="fas fa-calendar-check"></i>
    <span>Booking: ${booking.appointmentDate} | ${booking.appointmentTime}</span>
  `;

    chatHeader.appendChild(bookingInfo);
  }

  // Function to load doctor information
  function loadDoctorInfo() {
    const doctor = DOCTORS_DATA[doctorId];
    if (doctor) {
      document.getElementById("doctor-avatar").src = doctor.img;
      document.getElementById("doctor-name").textContent = doctor.name;
      document.getElementById("doctor-status").textContent =
        doctor.status === "available" ? "Online" : "Offline";
    }
  }

  // Function to load initial messages
  function loadInitialMessages() {
    const session = StorageManager.getActiveChatSession();
    const booking = StorageManager.getBookingById(session.bookingId);

    addDateSeparator("Hari Ini");

    addMessage(
      `Selamat datang! Saya Dr. ${DOCTORS_DATA[doctorId].name}. Saya lihat Anda memiliki jadwal konsultasi pada ${booking.appointmentDate} pukul ${booking.appointmentTime}. Ada yang ingin Anda tanyakan?`,
      "doctor",
      "10:30"
    );
  }

  // Function to send message
  function sendMessage() {
    const text = messageInput.value.trim();
    if (text === "") return;

    // Add user message
    const currentTime = getCurrentTime();
    addMessage(text, "user", currentTime);

    // Clear input
    messageInput.value = "";

    // Simulate doctor typing
    setTimeout(() => {
      showTypingIndicator();

      setTimeout(() => {
        hideTypingIndicator();
        simulateDoctorReply(text);
      }, 2000);
    }, 500);
  }

  // Function to add message to chat
  function addMessage(text, sender, time) {
    const messageDiv = document.createElement("div");
    messageDiv.className = `message ${sender}`;

    messageDiv.innerHTML = `
      <div class="message-bubble">
        ${text}
        <span class="message-time">${time}</span>
      </div>
    `;

    chatMessages.appendChild(messageDiv);
    scrollToBottom();
  }

  // Function to add date separator
  function addDateSeparator(date) {
    const separator = document.createElement("div");
    separator.className = "date-separator";
    separator.textContent = date;
    chatMessages.appendChild(separator);
  }

  // Function to show typing indicator
  function showTypingIndicator() {
    typingIndicator.style.display = "flex";
    scrollToBottom();
  }

  // Function to hide typing indicator
  function hideTypingIndicator() {
    typingIndicator.style.display = "none";
  }

  // Function to simulate doctor reply
  function simulateDoctorReply() {
    const replies = [
      "Terima kasih atas pertanyaannya. Berdasarkan informasi yang Anda berikan, saya sarankan...",
      "Untuk kasus seperti ini, biasanya kami merekomendasikan pola makan yang seimbang dengan...",
      "Saya memahami kekhawatiran Anda. Mari kita bahas lebih detail mengenai nutrisi anak Anda.",
      "Apakah anak Anda memiliki riwayat alergi makanan tertentu?",
      "Saya sarankan untuk melakukan pemeriksaan lanjutan. Apakah Anda bersedia?",
    ];

    const randomReply = replies[Math.floor(Math.random() * replies.length)];
    const currentTime = getCurrentTime();
    addMessage(randomReply, "doctor", currentTime);
  }

  // Function to get current time
  function getCurrentTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    return `${hours}:${minutes}`;
  }

  // Function to scroll to bottom
  function scrollToBottom() {
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }
});
