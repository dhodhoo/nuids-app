// Initialize EmailJS with your public key
(function () {
  emailjs.init("P4aWgv4j4UY9HbaDK");
})();

document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.getElementById("contactForm");
  const submitBtn = document.getElementById("submitBtn");
  const loadingOverlay = document.getElementById("loadingOverlay");
  const successMessage = document.getElementById("successMessage");

  // Form submission
  contactForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    // Validate form
    if (!contactForm.checkValidity()) {
      alert("Mohon lengkapi semua field yang wajib diisi!");
      return;
    }

    // Show loading
    showLoading();

    // Get form data
    const formData = {
      from_name: document.getElementById("name").value.trim(),
      reply_to: document.getElementById("email").value.trim(),
      phone_number: document.getElementById("phone").value.trim() || "-",
      subject: document.getElementById("subject").value,
      message: document.getElementById("message").value.trim(),
      to_name: "Nuids Team", // Your name
    };

    try {
      // Send email using EmailJS
      const response = await emailjs.send(
        "service_o327mtj", // Service ID dari EmailJS
        "template_77iylfr", // Template ID dari EmailJS
        formData
      );

      console.log("SUCCESS!", response.status, response.text);

      // Hide loading
      hideLoading();

      // Show success message
      showSuccess();

      // Reset form
      contactForm.reset();
    } catch (error) {
      console.error("FAILED...", error);

      // Hide loading
      hideLoading();

      // Show error message
      alert(
        "Maaf, terjadi kesalahan saat mengirim pesan. Silakan coba lagi atau hubungi kami melalui email/telepon."
      );
    }
  });

  // Show loading overlay
  function showLoading() {
    loadingOverlay.classList.add("show");
    submitBtn.disabled = true;
  }

  // Hide loading overlay
  function hideLoading() {
    loadingOverlay.classList.remove("show");
    submitBtn.disabled = false;
  }

  // Show success message
  function showSuccess() {
    successMessage.style.display = "flex";
  }

  // Close success message (global function)
  window.closeSuccessMessage = function () {
    successMessage.style.display = "none";
  };

  // Auto-hide success message after 5 seconds
  setTimeout(() => {
    if (successMessage.style.display === "flex") {
      closeSuccessMessage();
    }
  }, 5000);
});
