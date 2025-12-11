// src/js/utils/storage.js

const StorageManager = {
  // Booking Management
  saveBooking(bookingData) {
    const bookings = this.getAllBookings();
    const bookingId = this.generateBookingId();

    const booking = {
      id: bookingId,
      ...bookingData,
      status: "confirmed", // confirmed, completed, cancelled
      createdAt: new Date().toISOString(),
      chatToken: this.generateChatToken(bookingId),
      chatEnabled: true,
      appointmentDate: bookingData.date,
      appointmentTime: bookingData.time,
    };

    bookings.push(booking);
    localStorage.setItem("bookings", JSON.stringify(bookings));

    return booking;
  },

  getAllBookings() {
    const bookings = localStorage.getItem("bookings");
    return bookings ? JSON.parse(bookings) : [];
  },

  getBookingById(bookingId) {
    const bookings = this.getAllBookings();
    return bookings.find((b) => b.id === bookingId);
  },

  getUserBookings(userId) {
    const bookings = this.getAllBookings();
    // Filter by user (for now, return all - implement user system later)
    return bookings;
  },

  getBookingsByDoctor(doctorId) {
    const bookings = this.getAllBookings();
    return bookings.filter((b) => b.doctorId == doctorId);
  },

  // Chat Access Control
  validateChatAccess(doctorId, chatToken) {
    const bookings = this.getAllBookings();
    const booking = bookings.find(
      (b) =>
        b.doctorId == doctorId &&
        b.chatToken === chatToken &&
        b.chatEnabled === true &&
        b.status === "confirmed"
    );

    if (!booking) {
      return {
        valid: false,
        message: "Tidak ada booking aktif dengan dokter ini",
      };
    }

    // Check if appointment date is passed
    const appointmentDateTime = new Date(
      `${booking.appointmentDate}T${booking.appointmentTime}`
    );
    const now = new Date();
    const daysDiff = (appointmentDateTime - now) / (1000 * 60 * 60 * 24);

    // Allow chat 1 day before until 7 days after appointment
    if (daysDiff < -7) {
      return {
        valid: false,
        message: "Sesi chat telah berakhir (7 hari setelah konsultasi)",
      };
    }

    if (daysDiff > 1) {
      return {
        valid: false,
        message: "Chat akan dibuka 1 hari sebelum jadwal konsultasi",
      };
    }

    return {
      valid: true,
      booking: booking,
      message: "Akses chat valid",
    };
  },

  // Token Generation
  generateBookingId() {
    return (
      "BK-" +
      Date.now() +
      "-" +
      Math.random().toString(36).substr(2, 9).toUpperCase()
    );
  },

  generateChatToken(bookingId) {
    // Simple token generation (in production, use JWT)
    const timestamp = Date.now();
    const random = Math.random().toString(36).substr(2);
    return btoa(`${bookingId}-${timestamp}-${random}`);
  },

  // Store chat token in session
  setActiveChatSession(doctorId, chatToken, bookingId) {
    const session = {
      doctorId,
      chatToken,
      bookingId,
      startTime: new Date().toISOString(),
    };
    sessionStorage.setItem("activeChatSession", JSON.stringify(session));
  },

  getActiveChatSession() {
    const session = sessionStorage.getItem("activeChatSession");
    return session ? JSON.parse(session) : null;
  },

  clearChatSession() {
    sessionStorage.removeItem("activeChatSession");
  },

  // Check if user has any booking with doctor
  hasBookingWithDoctor(doctorId) {
    const bookings = this.getBookingsByDoctor(doctorId);
    return bookings.some(
      (b) => b.status === "confirmed" && b.chatEnabled === true
    );
  },
};

// Export for use in other files
if (typeof module !== "undefined" && module.exports) {
  module.exports = StorageManager;
}
