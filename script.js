// script.js - Xử lý các hiệu ứng động

document.addEventListener("DOMContentLoaded", () => {
  // 1. Hiệu ứng cuộn mượt (Smooth Scrolling) cho các liên kết menu
  // Dành cho các trình duyệt cũ không hỗ trợ scroll-behavior: smooth trong CSS
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      if (targetId === "#") return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
        });
      }
    });
  });

  // 2. Hiệu ứng Scroll Reveal (Hiện dần nội dung khi cuộn xuống)
  const revealSections = document.querySelectorAll(".reveal-section");

  const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    const elementVisible = 100; // Khoảng cách từ đáy màn hình để bắt đầu hiện

    revealSections.forEach((section) => {
      const elementTop = section.getBoundingClientRect().top;

      if (elementTop < windowHeight - elementVisible) {
        section.classList.add("active");
      }
    });
  };

  // Gọi hàm một lần khi tải trang để hiện các phần đầu tiên
  revealOnScroll();

  // Lắng nghe sự kiện cuộn
  window.addEventListener("scroll", revealOnScroll);
});
