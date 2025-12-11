// Get doctor ID from URL
const urlParams = new URLSearchParams(window.location.search);
const doctorId = urlParams.get("doctor");

// Doctor data
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

// Available time slots
const TIME_SLOTS = [
  "08:00",
  "09:00",
  "10:00",
  "11:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
];

// Booking data
let bookingData = {
  doctorId: doctorId,
  date: null,
  time: null,
  childName: null,
  childAge: null,
  childGender: null,
  parentPhone: null,
  complaint: null,
  medicalHistory: null,
};

document.addEventListener("DOMContentLoaded", () => {
  const currentUser = localStorage.getItem("currentUser");
  if (!currentUser) {
    window.location.href = "/index.html";
  }
  loadDoctorInfo();
  setupDatePicker();
  setupFormValidation();
});

// Load doctor information
function loadDoctorInfo() {
  const doctor = DOCTORS_DATA[doctorId];
  if (doctor) {
    document.getElementById("doctor-avatar").src = doctor.img;
    document.getElementById("doctor-name").textContent = doctor.name;
    document.getElementById("doctor-specialty").textContent = doctor.specialty;
    document.getElementById("doctor-practice").textContent = doctor.practice;
    document.getElementById("doctor-cost").textContent = doctor.cost;
  }
}

// Setup date picker with minimum date
function setupDatePicker() {
  const dateInput = document.getElementById("appointment-date");
  const today = new Date();

  const minDate = today.toISOString().split("T")[0];
  dateInput.setAttribute("min", minDate);

  dateInput.addEventListener("change", function () {
    loadTimeSlots(this.value);
  });
}

// Load available time slots
function loadTimeSlots() {
  const timeSlotsContainer = document.getElementById("time-slots");
  const helpText = document.getElementById("time-help");

  timeSlotsContainer.innerHTML = "";
  helpText.textContent = "Pilih waktu yang tersedia";

  // Simulate some slots being booked
  const bookedSlots = ["09:00", "14:00"]; // Example booked slots

  TIME_SLOTS.forEach((time) => {
    const slotBtn = document.createElement("button");
    slotBtn.type = "button";
    slotBtn.className = "time-slot";
    slotBtn.textContent = time;

    if (bookedSlots.includes(time)) {
      slotBtn.classList.add("disabled");
      slotBtn.disabled = true;
    } else {
      slotBtn.addEventListener("click", function () {
        selectTimeSlot(this, time);
      });
    }

    timeSlotsContainer.appendChild(slotBtn);
  });
}

// Select time slot
function selectTimeSlot(button, time) {
  document.querySelectorAll(".time-slot").forEach((slot) => {
    slot.classList.remove("selected");
  });
  button.classList.add("selected");
  bookingData.time = time;
}

// Navigate between steps
function nextStep(stepNumber) {
  if (!validateCurrentStep(stepNumber - 1)) {
    return;
  }

  // Update progress bar
  updateProgressBar(stepNumber);

  // Show next step
  document.querySelectorAll(".form-step").forEach((step) => {
    step.classList.remove("active");
  });
  document.getElementById(`step-${stepNumber}`).classList.add("active");

  // Load confirmation data for step 3
  if (stepNumber === 3) {
    loadConfirmationData();
  }

  // Scroll to top
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function prevStep(stepNumber) {
  updateProgressBar(stepNumber);

  document.querySelectorAll(".form-step").forEach((step) => {
    step.classList.remove("active");
  });
  document.getElementById(`step-${stepNumber}`).classList.add("active");

  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Update progress bar
function updateProgressBar(activeStep) {
  document.querySelectorAll(".progress-step").forEach((step, index) => {
    const stepNum = index + 1;
    if (stepNum < activeStep) {
      step.classList.add("completed");
      step.classList.remove("active");
    } else if (stepNum === activeStep) {
      step.classList.add("active");
      step.classList.remove("completed");
    } else {
      step.classList.remove("active", "completed");
    }
  });
}

// Validate current step
function validateCurrentStep(step) {
  if (step === 1) {
    const date = document.getElementById("appointment-date").value;
    const time = bookingData.time;

    if (!date) {
      alert("Silakan pilih tanggal konsultasi");
      return false;
    }
    if (!time) {
      alert("Silakan pilih waktu konsultasi");
      return false;
    }

    bookingData.date = date;
    return true;
  }

  if (step === 2) {
    const childName = document.getElementById("child-name").value.trim();
    const childAge = document.getElementById("child-age").value;
    const childGender = document.getElementById("child-gender").value;
    const parentPhone = document.getElementById("parent-phone").value.trim();
    const complaint = document.getElementById("complaint").value.trim();
    const terms = document.getElementById("terms").checked;

    if (!childName || !childAge || !childGender || !parentPhone || !complaint) {
      alert("Mohon lengkapi semua data yang wajib diisi");
      return false;
    }

    if (!terms) {
      alert("Anda harus menyetujui syarat dan ketentuan");
      return false;
    }

    bookingData.childName = childName;
    bookingData.childAge = childAge;
    bookingData.childGender = childGender;
    bookingData.parentPhone = parentPhone;
    bookingData.complaint = complaint;
    bookingData.medicalHistory = document
      .getElementById("medical-history")
      .value.trim();

    return true;
  }

  return true;
}

// Load confirmation data
function loadConfirmationData() {
  const doctor = DOCTORS_DATA[doctorId];

  document.getElementById("confirm-doctor").textContent = doctor.name;
  document.getElementById("confirm-specialty").textContent = doctor.specialty;
  document.getElementById("confirm-cost").textContent = doctor.cost;

  // Format date
  const dateObj = new Date(bookingData.date);
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const formattedDate = dateObj.toLocaleDateString("id-ID", options);

  document.getElementById("confirm-date").textContent = formattedDate;
  document.getElementById("confirm-time").textContent =
    bookingData.time + " WIB";
  document.getElementById("confirm-child-name").textContent =
    bookingData.childName;
  document.getElementById("confirm-child-age").textContent =
    bookingData.childAge + " bulan";
  document.getElementById("confirm-phone").textContent =
    bookingData.parentPhone;
  document.getElementById("confirm-complaint").textContent =
    bookingData.complaint;
}

// Setup form validation and submission
function setupFormValidation() {
  const form = document.getElementById("booking-form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    submitBooking();
  });
}

// Submit booking
// Update fungsi submitBooking di booking.js

function submitBooking() {
  console.log("Booking Data:", bookingData);

  const submitBtn = document.querySelector(".btn-confirm");
  submitBtn.disabled = true;
  submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Memproses...';

  setTimeout(() => {
    // Save booking to storage dengan chat token
    const savedBooking = StorageManager.saveBooking(bookingData);

    console.log("Booking saved:", savedBooking);
    console.log("Chat Token:", savedBooking.chatToken);

    submitBtn.disabled = false;
    submitBtn.innerHTML = '<i class="fas fa-check"></i> Konfirmasi Booking';

    // Store booking ID for success modal
    sessionStorage.setItem("lastBookingId", savedBooking.id);

    showSuccessModal(savedBooking);
  }, 2000);
}

// Update showSuccessModal untuk include chat access info
function showSuccessModal(booking) {
  const modal = document.getElementById("success-modal");
  const modalBody = modal.querySelector(".success-content");

  // Calculate when chat becomes available
  const appointmentDate = new Date(
    `${booking.appointmentDate}T${booking.appointmentTime}`
  );
  const chatAvailableDate = new Date(appointmentDate);
  chatAvailableDate.setDate(chatAvailableDate.getDate());

  const formattedChatDate = chatAvailableDate.toLocaleDateString("id-ID", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  modalBody.innerHTML = `
    <div class="success-icon">
      <i class="fas fa-check-circle"></i>
    </div>
    <h2>Booking Berhasil!</h2>
    <div class="booking-id">
      <p><strong>ID Booking:</strong> ${booking.id}</p>
    </div>
    <p>Appointment Anda telah berhasil dijadwalkan. Kami akan mengirimkan konfirmasi melalui WhatsApp.</p>
    
    <div class="chat-access-info">
      <i class="fas fa-comments"></i>
      <p><strong>Akses Chat:</strong><br/>
      Anda dapat mulai chat dengan dokter mulai tanggal <strong>${formattedChatDate}</strong></p>
    </div>
    
    <div class="modal-actions">
      <button class="btn-primary" onclick="goToChatWithToken('${booking.doctorId}', '${booking.chatToken}')">
        <i class="fas fa-comments"></i> Akses Chat
      </button>
      <button class="btn-secondary" onclick="window.location.href='/src/pages/user/(features)/doctor.html'">
        Kembali ke Daftar Dokter
      </button>
    </div>
  `;

  modal.classList.add("show");
}

// Function to navigate to chat with token
function goToChatWithToken(doctorId, chatToken) {
  window.location.href = `/src/pages/user/(features)/chatdr.html?doctor=${doctorId}&token=${chatToken}`;
}
