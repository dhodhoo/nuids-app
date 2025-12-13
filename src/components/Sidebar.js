document.addEventListener("DOMContentLoaded", function () {
  const fa = document.createElement("link");
  fa.rel = "stylesheet";
  fa.href =
    "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css";

  const head = document.head;
  const font = document.createElement("link");
  font.href =
    "https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap";
  font.rel = "stylesheet";

  head.append(font);
  head.append(fa);

  // Create Sidebar Toggle Button (Fixed position)
  const sidebarToggle = document.createElement("button");
  sidebarToggle.className = "sidebar-toggle";
  sidebarToggle.innerHTML = `
    <i class="fas fa-angles-right"></i>
  `;

  // Create Sidebar
  const sidebar = document.createElement("aside");
  sidebar.className = "sidebar";
  sidebar.innerHTML = `
    <div class="sidebar-header">
      <div class="sidebar-logo">
        <img src="https://cdn.jsdelivr.net/gh/free-whiteboard-online/Free-Erasorio-Alternative-for-Collaborative-Design@48414511af747abe8b338932e61ad96695a9674c/uploads/2025-11-27T04-42-35-160Z-nbyn2hggg.png" alt="Logo" width="32" />
        <h2>Nuids</h2>
      </div>
      <button class="sidebar-close">
        <i class="fas fa-times"></i>
      </button>
    </div>

    <div class="sidebar-profile">
      <div class="avatar">
        <img
          src="https://images.unsplash.com/photo-1740252117044-2af197eea287"
          alt="Avatar"
          onerror="this.src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM3NzciIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cGF0aCBkPSJNMjAgMjF2LTJhNCA0IDAgMCAwLTQtNEg4YTQgNCAwIDAgMC00IDR2MiIvPjxjaXJjbGUgY3g9IjEyIiBjeT0iNyIgcj0iNCIvPjwvc3ZnPg=='"
        />
      </div>
      <div class="profile-info">
        <h3 class="adminName">User</h3>
        <p class="profile-role">Member</p>
      </div>
    </div>

    <nav class="sidebar-nav">
      <ul class="nav-menu">
        <li>
          <a href="/src/pages/user/profile.html" class="nav-link">
            <i class="fas fa-user-circle"></i>
            <span>Profile</span>
          </a>
        </li>
        <li>
          <a href="/src/pages/user/home.html" class="nav-link">
            <i class="fas fa-home"></i>
            <span>Home</span>
          </a>
        </li>
        <li>
          <a href="/src/pages/user/features.html" class="nav-link">
            <i class="fas fa-user-md"></i>
            <span>Features</span>
          </a>
        </li>
        <li>
          <a href="/src/pages/user/about.html" class="nav-link">
            <i class="fas fa-info-circle"></i>
            <span>About Us</span>
          </a>
        </li>
        <li>
          <a href="/src/pages/user/contact.html" class="nav-link">
            <i class="fas fa-envelope"></i>
            <span>Contact</span>
          </a>
        </li>
      </ul>
    </nav>

    <div class="sidebar-footer">
      <button id="logoutBtn" class="logout-button">
        <i class="fas fa-sign-out-alt"></i>
        <span>Logout</span>
      </button>
    </div>
  `;

  // Create Overlay
  const overlay = document.createElement("div");
  overlay.className = "sidebar-overlay";

  const style = document.createElement("style");
  style.textContent = `
  * {
    font-family: 'Poppins', sans-serif;
  }

  /* Sidebar Toggle Button (Fixed) */
  .sidebar-toggle {
    background: transparent;
    position: fixed;
    top: 50%;
    left: 10px;
    border: none;
    border-radius: 12px;
    color: #333;
    font-size: 1.5rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    z-index: 1001;
  }

  .sidebar-toggle:hover {
    transform: translateX(2px);
    
  }

  .sidebar-toggle:active {
    transform: translateY(0);
  }

  /* Sidebar */
  .sidebar {
    position: fixed;
    top: 0;
    left: -320px;
    width: 320px;
    height: 100vh;
    background: linear-gradient(180deg, #ffffff 0%, #f8f9fa 100%);
    box-shadow: 4px 0 20px rgba(0, 0, 0, 0.1);
    transition: left 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    z-index: 1002;
    overflow-y: auto;
    overflow-x: hidden;
  }

  .sidebar.active {
    left: 0;
  }

  /* Sidebar Scrollbar */
  .sidebar::-webkit-scrollbar {
    width: 6px;
  }

  .sidebar::-webkit-scrollbar-track {
    background: transparent;
  }

  .sidebar::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.2);
    border-radius: 10px;
  }

  /* Sidebar Header */
  .sidebar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 25px 20px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);
    background: white;
  }

  .sidebar-logo {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .sidebar-logo img {
    width: 32px;
    height: 32px;
  }

  .sidebar-logo h2 {
    margin: 0;
    font-size: 1.5rem;
    font-weight: 700;
    background: linear-gradient(135deg, #5196fdff 0%, #1a76ff70 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .sidebar-close {
    width: 35px;
    height: 35px;
    background: transparent;
    border: none;
    color: #666;
    font-size: 1.3rem;
    cursor: pointer;
    border-radius: 8px;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .sidebar-close:hover {
    background: #5196fd25;
    color: #5196fdff;
  }

  /* Sidebar Profile */
  .sidebar-profile {
    padding: 25px 20px;
    text-align: center;
    background: #1a76ff29;
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  }

  .sidebar-profile .avatar {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 15px;
    border: 4px solid white;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  }

  .sidebar-profile .avatar img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .profile-info h3 {
    margin: 0 0 5px 0;
    font-size: 1.2rem;
    font-weight: 700;
    color: #333;
  }

  .profile-role {
    margin: 0;
    font-size: 0.9rem;
    color: #777;
  }

  /* Sidebar Navigation */
  .sidebar-nav {
    padding: 15px 0;
  }

  .nav-menu {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .nav-menu li {
    margin: 0;
  }

  .nav-link {
    display: flex;
    align-items: center;
    gap: 15px;
    padding: 15px 25px;
    text-decoration: none;
    color: #555;
    font-weight: 500;
    font-size: 0.95rem;
    transition: all 0.3s ease;
    position: relative;
  }

  .nav-link i {
    font-size: 1.2rem;
    width: 24px;
    text-align: center;
    color: #777;
    transition: all 0.3s ease;
  }

  .nav-link span {
    flex: 1;
  }

  .nav-link::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 4px;
    background: #1a76ffff;
    transform: scaleY(0);
    transition: transform 0.3s ease;
  }

  .nav-link:hover,
  .nav-link.active {
    background: linear-gradient(90deg, #1a76ff39 0%, transparent 100%);
    color: #1a76ffff;
  }

  .nav-link:hover i,
  .nav-link.active i {
    color: #1a76ffff;
    transform: translateX(5px);
  }

  .nav-link:hover::before,
  .nav-link.active::before {
    transform: scaleY(1);
  }

  /* Sidebar Footer */
  .sidebar-footer {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 20px;
    background: white;
    border-top: 1px solid rgba(0, 0, 0, 0.08);
  }

  .logout-button {
    width: 100%;
    padding: 12px 20px;
    background: linear-gradient(135deg, #5196fdff 0%, #1a76ffff 100%);
    border: none;
    border-radius: 12px;
    color: white;
    font-weight: 600;
    font-size: 0.95rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    transition: all 0.3s ease;
    box-shadow: 0 4px 12px #5196fd41;
  }

  .logout-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 16px #5196fd78;
  }

  .logout-button:active {
    transform: translateY(0);
  }

  .logout-button i {
    font-size: 1.1rem;
  }

  /* Overlay */
  .sidebar-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    z-index: 1001;
  }

  .sidebar-overlay.active {
    opacity: 1;
    visibility: visible;
  }

  /* Body shift when sidebar open (optional) */
  body.sidebar-open {
    overflow: hidden;
  }

  /* Active page indicator */
  .nav-link.active {
    font-weight: 600;
  }

  /* Responsive */
  @media (max-width: 768px) {
    .sidebar {
      width: 280px;
      left: -280px;
    }

    .sidebar-toggle {
      width: 45px;
      height: 45px;
      font-size: 1.3rem;
    }

    .sidebar-profile .avatar {
      width: 70px;
      height: 70px;
    }

    .nav-link {
      padding: 12px 20px;
      font-size: 0.9rem;
    }
  }

  @media (max-width: 480px) {
    .sidebar {
      width: 85%;
      max-width: 280px;
    }

    .sidebar-toggle {
      top: 15px;
      left: 15px;
    }
  }

  /* Animation */
  @keyframes slideIn {
    from {
      transform: translateX(-20px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }

  .sidebar.active .nav-menu li {
    animation: slideIn 0.3s ease forwards;
  }

  .sidebar.active .nav-menu li:nth-child(1) { animation-delay: 0.1s; }
  .sidebar.active .nav-menu li:nth-child(2) { animation-delay: 0.15s; }
  .sidebar.active .nav-menu li:nth-child(3) { animation-delay: 0.2s; }
  .sidebar.active .nav-menu li:nth-child(4) { animation-delay: 0.25s; }
  .sidebar.active .nav-menu li:nth-child(5) { animation-delay: 0.3s; }

  /* Prevent sidebar footer from being covered */
  .sidebar-nav {
    padding-bottom: 100px; /* Space for footer */
  }
  `;

  document.head.appendChild(style);
  document.body.appendChild(sidebarToggle);
  document.body.appendChild(sidebar);
  document.body.appendChild(overlay);

  // Functionality
  setTimeout(() => {
    const toggleBtn = document.querySelector(".sidebar-toggle");
    const closeBtn = document.querySelector(".sidebar-close");
    const sidebarEl = document.querySelector(".sidebar");
    const overlayEl = document.querySelector(".sidebar-overlay");
    const navLinks = document.querySelectorAll(".nav-link");

    // Open sidebar
    function openSidebar() {
      sidebarEl.classList.add("active");
      overlayEl.classList.add("active");
      document.body.classList.add("sidebar-open");
    }

    // Close sidebar
    function closeSidebar() {
      sidebarEl.classList.remove("active");
      overlayEl.classList.remove("active");
      document.body.classList.remove("sidebar-open");
    }

    // Toggle sidebar
    toggleBtn.addEventListener("click", () => {
      if (sidebarEl.classList.contains("active")) {
        closeSidebar();
      } else {
        openSidebar();
      }
    });

    // Close button
    closeBtn.addEventListener("click", closeSidebar);

    // Close when clicking overlay
    overlayEl.addEventListener("click", closeSidebar);

    // Close when clicking nav links
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        closeSidebar();
      });
    });

    // Set active link based on current page
    const currentPath = window.location.pathname;
    navLinks.forEach((link) => {
      if (
        link.getAttribute("href") &&
        currentPath.includes(link.getAttribute("href"))
      ) {
        link.classList.add("active");
      }
    });

    // Keyboard support (ESC to close)
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && sidebarEl.classList.contains("active")) {
        closeSidebar();
      }
    });

    // Prevent body scroll when sidebar is open
    let scrollY = 0;
    const preventScroll = () => {
      scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
    };

    const allowScroll = () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      window.scrollTo(0, scrollY);
    };

    // Apply scroll prevention
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === "class") {
          if (document.body.classList.contains("sidebar-open")) {
            preventScroll();
          } else {
            allowScroll();
          }
        }
      });
    });

    observer.observe(document.body, { attributes: true });
  }, 100);
});
