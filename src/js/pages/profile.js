// Profile Manager
const ProfileManager = {
  currentUser: null,

  init() {
    this.loadUserData();
    this.setupEventListeners();
    this.loadChildren();
    this.generateAvatarOptions();
  },

  // Load user data from localStorage
  loadUserData() {
    const userStr = localStorage.getItem("currentUser");
    if (!userStr) {
      window.location.href = "/index.html";
      return;
    }

    this.currentUser = JSON.parse(userStr);

    // Display user info in header
    document.getElementById("profileName").textContent =
      this.currentUser.name || "User";
    document.getElementById("profileEmail").textContent =
      this.currentUser.email || "";

    // Load avatar if exists
    if (this.currentUser.avatar) {
      document.getElementById("avatarImage").src = this.currentUser.avatar;
    }

    // Populate personal data form
    this.populatePersonalForm();
  },

  // Populate personal data form
  populatePersonalForm() {
    document.getElementById("fullName").value = this.currentUser.name || "";
    document.getElementById("email").value = this.currentUser.email || "";
    document.getElementById("phone").value = this.currentUser.phone || "";
    document.getElementById("birthDate").value =
      this.currentUser.birthDate || "";
    document.getElementById("gender").value = this.currentUser.gender || "";
    document.getElementById("address").value = this.currentUser.address || "";
  },

  // Setup event listeners
  setupEventListeners() {
    // Tab switching
    const tabBtns = document.querySelectorAll(".tab-btn");
    tabBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        const tab = btn.getAttribute("data-tab");
        this.switchTab(tab);
      });
    });

    // Personal data form
    document
      .getElementById("personalDataForm")
      .addEventListener("submit", (e) => {
        e.preventDefault();
        this.savePersonalData();
      });

    // Security form
    document.getElementById("securityForm").addEventListener("submit", (e) => {
      e.preventDefault();
      this.changePassword();
    });

    // Password toggle
    const toggleBtns = document.querySelectorAll(".toggle-password");
    toggleBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        const target = btn.getAttribute("data-target");
        const input = document.getElementById(target);
        const icon = btn.querySelector("i");

        if (input.type === "password") {
          input.type = "text";
          icon.classList.remove("fa-eye");
          icon.classList.add("fa-eye-slash");
        } else {
          input.type = "password";
          icon.classList.remove("fa-eye-slash");
          icon.classList.add("fa-eye");
        }
      });
    });

    // Add child button
    document.getElementById("addChildBtn").addEventListener("click", () => {
      this.openChildModal();
    });

    // Child form
    document.getElementById("childForm").addEventListener("submit", (e) => {
      e.preventDefault();
      this.saveChild();
    });

    // Close child modal
    document.getElementById("closeChildModal").addEventListener("click", () => {
      this.closeChildModal();
    });

    document.getElementById("cancelChildBtn").addEventListener("click", () => {
      this.closeChildModal();
    });

    // Change avatar
    document.getElementById("changeAvatarBtn").addEventListener("click", () => {
      this.openAvatarModal();
    });

    // Close avatar modal
    document
      .getElementById("closeAvatarModal")
      .addEventListener("click", () => {
        this.closeAvatarModal();
      });

    // Delete account
    document
      .getElementById("deleteAccountBtn")
      .addEventListener("click", () => {
        this.deleteAccount();
      });

    // Close modal when clicking outside
    window.addEventListener("click", (e) => {
      if (e.target.classList.contains("modal")) {
        e.target.classList.remove("show");
      }
    });
  },

  // Switch tab
  switchTab(tabName) {
    // Update tab buttons
    document.querySelectorAll(".tab-btn").forEach((btn) => {
      btn.classList.remove("active");
    });
    document.querySelector(`[data-tab="${tabName}"]`).classList.add("active");

    // Update tab panes
    document.querySelectorAll(".tab-pane").forEach((pane) => {
      pane.classList.remove("active");
    });
    document.getElementById(tabName).classList.add("active");
  },

  // Save personal data
  savePersonalData() {
    const formData = {
      name: document.getElementById("fullName").value.trim(),
      email: document.getElementById("email").value.trim(),
      phone: document.getElementById("phone").value.trim(),
      birthDate: document.getElementById("birthDate").value,
      gender: document.getElementById("gender").value,
      address: document.getElementById("address").value.trim(),
    };

    // Validate
    if (!formData.name || !formData.email) {
      alert("Nama dan email wajib diisi!");
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert("Format email tidak valid!");
      return;
    }

    // Phone validation (optional, if filled)
    if (formData.phone) {
      const phoneRegex = /^[0-9]{10,13}$/;
      if (!phoneRegex.test(formData.phone)) {
        alert("Format nomor telepon tidak valid! (10-13 digit)");
        return;
      }
    }

    // Update currentUser object
    Object.assign(this.currentUser, formData);

    // Save to localStorage
    localStorage.setItem(
      this.currentUser.email,
      JSON.stringify(this.currentUser)
    );
    localStorage.setItem("currentUser", JSON.stringify(this.currentUser));

    // Update display
    document.getElementById("profileName").textContent = formData.name;
    document.getElementById("profileEmail").textContent = formData.email;

    // Show success message
    this.showNotification("Data berhasil disimpan!", "success");
  },

  // Change password
  changePassword() {
    const currentPassword = document
      .getElementById("currentPassword")
      .value.trim();
    const newPassword = document.getElementById("newPassword").value.trim();
    const confirmPassword = document
      .getElementById("confirmPassword")
      .value.trim();

    // Validate current password
    if (currentPassword !== this.currentUser.password) {
      alert("Password saat ini salah!");
      return;
    }

    // Validate new password
    if (newPassword.length < 8) {
      alert("Password baru minimal 8 karakter!");
      return;
    }

    if (newPassword !== confirmPassword) {
      alert("Konfirmasi password tidak cocok!");
      return;
    }

    if (newPassword === currentPassword) {
      alert("Password baru tidak boleh sama dengan password lama!");
      return;
    }

    // Update password
    this.currentUser.password = newPassword;
    localStorage.setItem("currentUser", JSON.stringify(this.currentUser));
    localStorage.setItem(
      this.currentUser.email,
      JSON.stringify(this.currentUser)
    );

    // Clear form
    document.getElementById("securityForm").reset();

    // Show success message
    this.showNotification("Password berhasil diubah!", "success");
  },

  // Load children data
  loadChildren() {
    if (!this.currentUser.children || this.currentUser.children.length === 0) {
      document.getElementById("childrenList").innerHTML = `
        <div class="empty-state">
          <i class="fas fa-baby"></i>
          <p>Belum ada data anak</p>
          <small>Klik tombol "Tambah Anak" untuk menambahkan</small>
        </div>
      `;
      return;
    }

    const childrenList = document.getElementById("childrenList");
    childrenList.innerHTML = "";

    this.currentUser.children.forEach((child, index) => {
      const age = this.calculateAge(child.birthDate);
      const card = document.createElement("div");
      card.className = "child-card";
      card.innerHTML = `
        <div class="child-card-header">
          <div class="child-info">
            <h4>${child.name}</h4>
            <span class="child-age">
              <i class="fas fa-birthday-cake"></i> ${age}
            </span>
          </div>
          <div class="child-actions">
            <button class="icon-btn edit-btn" onclick="ProfileManager.editChild(${index})">
              <i class="fas fa-edit"></i>
            </button>
            <button class="icon-btn delete-btn" onclick="ProfileManager.deleteChild(${index})">
              <i class="fas fa-trash-alt"></i>
            </button>
          </div>
        </div>
        <div class="child-stats">
          <div class="stat-item">
            <div class="stat-label">Jenis Kelamin</div>
            <div class="stat-value">
              <i class="fas ${
                child.gender === "male" ? "fa-mars" : "fa-venus"
              }"></i>
              ${child.gender === "male" ? "L" : "P"}
            </div>
          </div>
          <div class="stat-item">
            <div class="stat-label">Berat Badan</div>
            <div class="stat-value">${child.weight || "-"} kg</div>
          </div>
          <div class="stat-item">
            <div class="stat-label">Tinggi Badan</div>
            <div class="stat-value">${child.height || "-"} cm</div>
          </div>
          <div class="stat-item">
            <div class="stat-label">Status</div>
            <div class="stat-value">
              <i class="fas fa-check-circle" style="color: #4caf50;"></i>
              Sehat
            </div>
          </div>
        </div>
        ${
          child.notes
            ? `
          <div style="margin-top: 15px; padding: 10px; background: white; border-radius: 8px; font-size: 0.85rem; color: #666;">
            <strong>Catatan:</strong> ${child.notes}
          </div>
        `
            : ""
        }
      `;
      childrenList.appendChild(card);
    });
  },

  // Calculate age from birth date
  calculateAge(birthDate) {
    if (!birthDate) return "-";

    const birth = new Date(birthDate);
    const today = new Date();
    const diffTime = Math.abs(today - birth);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    const years = Math.floor(diffDays / 365);
    const months = Math.floor((diffDays % 365) / 30);

    if (years > 0) {
      return `${years} tahun ${months} bulan`;
    } else if (months > 0) {
      return `${months} bulan`;
    } else {
      return `${diffDays} hari`;
    }
  },

  // Open child modal (add/edit)
  openChildModal(childIndex = null) {
    const modal = document.getElementById("childModal");
    const form = document.getElementById("childForm");
    const title = document.getElementById("childModalTitle");

    form.reset();

    if (childIndex !== null) {
      // Edit mode
      title.textContent = "Edit Data Anak";
      const child = this.currentUser.children[childIndex];
      document.getElementById("childId").value = childIndex;
      document.getElementById("childName").value = child.name;
      document.getElementById("childGender").value = child.gender;
      document.getElementById("childBirthDate").value = child.birthDate;
      document.getElementById("childWeight").value = child.weight || "";
      document.getElementById("childHeight").value = child.height || "";
      document.getElementById("childNotes").value = child.notes || "";
    } else {
      // Add mode
      title.textContent = "Tambah Data Anak";
      document.getElementById("childId").value = "";
    }

    modal.classList.add("show");
  },

  // Close child modal
  closeChildModal() {
    document.getElementById("childModal").classList.remove("show");
    document.getElementById("childForm").reset();
  },

  // Save child (add or edit)
  saveChild() {
    const childId = document.getElementById("childId").value;
    const childData = {
      name: document.getElementById("childName").value.trim(),
      gender: document.getElementById("childGender").value,
      birthDate: document.getElementById("childBirthDate").value,
      weight: parseFloat(document.getElementById("childWeight").value) || null,
      height: parseFloat(document.getElementById("childHeight").value) || null,
      notes: document.getElementById("childNotes").value.trim(),
    };

    // Validate
    if (!childData.name || !childData.gender || !childData.birthDate) {
      alert("Nama, jenis kelamin, dan tanggal lahir wajib diisi!");
      return;
    }

    // Initialize children array if not exists
    if (!this.currentUser.children) {
      this.currentUser.children = [];
    }

    if (childId !== "") {
      // Edit existing child
      this.currentUser.children[parseInt(childId)] = childData;
      this.showNotification("Data anak berhasil diperbarui!", "success");
    } else {
      // Add new child
      this.currentUser.children.push(childData);
      this.showNotification("Data anak berhasil ditambahkan!", "success");
    }

    // Save to localStorage
    localStorage.setItem(
      this.currentUser.email,
      JSON.stringify(this.currentUser)
    );
    localStorage.setItem("currentUser", JSON.stringify(this.currentUser));

    // Reload children list
    this.loadChildren();

    // Close modal
    this.closeChildModal();
  },

  // Edit child
  editChild(index) {
    this.openChildModal(index);
  },

  // Delete child
  deleteChild(index) {
    const child = this.currentUser.children[index];
    if (confirm(`Apakah Anda yakin ingin menghapus data ${child.name}?`)) {
      this.currentUser.children.splice(index, 1);
      localStorage.setItem("currentUser", JSON.stringify(this.currentUser));
      localStorage.setItem(
        this.currentUser.email,
        JSON.stringify(this.currentUser)
      );
      this.loadChildren();
      this.showNotification("Data anak berhasil dihapus!", "success");
    }
  },

  // Generate avatar options
  generateAvatarOptions() {
    const avatarGrid = document.getElementById("avatarGrid");
    const avatars = [
      "https://i.pravatar.cc/150?img=1",
      "https://i.pravatar.cc/150?img=5",
      "https://i.pravatar.cc/150?img=8",
      "https://i.pravatar.cc/150?img=12",
      "https://i.pravatar.cc/150?img=15",
      "https://i.pravatar.cc/150?img=20",
      "https://i.pravatar.cc/150?img=25",
      "https://i.pravatar.cc/150?img=30",
      "https://i.pravatar.cc/150?img=32",
      "https://i.pravatar.cc/150?img=35",
      "https://i.pravatar.cc/150?img=40",
      "https://i.pravatar.cc/150?img=44",
      "https://i.pravatar.cc/150?img=47",
      "https://i.pravatar.cc/150?img=50",
      "https://i.pravatar.cc/150?img=52",
      "https://i.pravatar.cc/150?img=60",
    ];

    avatars.forEach((avatar) => {
      const option = document.createElement("div");
      option.className = "avatar-option";
      option.innerHTML = `<img src="${avatar}" alt="Avatar" />`;
      option.addEventListener("click", () => {
        this.changeAvatar(avatar);
      });
      avatarGrid.appendChild(option);
    });
  },

  // Open avatar modal
  openAvatarModal() {
    document.getElementById("avatarModal").classList.add("show");
  },

  // Close avatar modal
  closeAvatarModal() {
    document.getElementById("avatarModal").classList.remove("show");
  },

  // Change avatar
  changeAvatar(avatarUrl) {
    this.currentUser.avatar = avatarUrl;
    localStorage.setItem("currentUser", JSON.stringify(this.currentUser));
    localStorage.setItem(
      this.currentUser.email,
      JSON.stringify(this.currentUser)
    );
    document.getElementById("avatarImage").src = avatarUrl;
    this.closeAvatarModal();
    this.showNotification("Avatar berhasil diubah!", "success");
  },

  // Delete account
  deleteAccount() {
    const confirm1 = confirm(
      "PERINGATAN: Tindakan ini akan menghapus akun Anda secara permanen!\n\nApakah Anda yakin?"
    );

    if (!confirm1) return;

    const confirm2 = prompt(
      'Ketik "HAPUS AKUN" untuk mengkonfirmasi penghapusan akun:'
    );

    if (confirm2 === "HAPUS AKUN") {
      // Clear user
      localStorage.removeItem("currentUser");
      localStorage.removeItem(this.currentUser.email);
      localStorage.removeItem(`visited_${this.currentUser.email}`);

      // Show notification and redirect
      alert("Akun Anda telah dihapus. Anda akan dialihkan ke halaman login.");
      window.location.href = "/index.html";
    } else {
      alert("Konfirmasi gagal. Akun tidak dihapus.");
    }
  },

  // Show notification
  showNotification(message, type = "success") {
    // Create notification element
    const notification = document.createElement("div");
    notification.className = `notification ${type}`;
    notification.innerHTML = `
      <i class="fas ${
        type === "success" ? "fa-check-circle" : "fa-exclamation-circle"
      }"></i>
      <span>${message}</span>
    `;

    // Add styles
    const style = document.createElement("style");
    style.textContent = `
      .notification {
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        background: white;
        border-radius: 12px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
        display: flex;
        align-items: center;
        gap: 12px;
        z-index: 10000;
        animation: slideInRight 0.3s ease;
      }

      @keyframes slideInRight {
        from {
          transform: translateX(400px);
          opacity: 0;
        }
        to {
          transform: translateX(0);
          opacity: 1;
        }
      }

      .notification.success {
        border-left: 4px solid #4caf50;
      }

      .notification.success i {
        color: #4caf50;
        font-size: 1.3rem;
      }

      .notification.error {
        border-left: 4px solid #f44336;
      }

      .notification.error i {
        color: #f44336;
        font-size: 1.3rem;
      }

      .notification span {
        font-weight: 600;
        color: #333;
      }
    `;

    if (!document.querySelector("style[data-notification]")) {
      style.setAttribute("data-notification", "true");
      document.head.appendChild(style);
    }

    // Add to body
    document.body.appendChild(notification);

    // Remove after 3 seconds
    setTimeout(() => {
      notification.style.animation = "slideOutRight 0.3s ease";
      setTimeout(() => notification.remove(), 300);
    }, 3000);
  },
};

// Initialize on page load
document.addEventListener("DOMContentLoaded", () => {
  // Check authentication
  const currentUser = localStorage.getItem("currentUser");
  if (!currentUser) {
    window.location.href = "/index.html";
  }

  ProfileManager.init();
});
