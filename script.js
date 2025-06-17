// script.js

// 1. Cek apakah file JS ter-load
console.log("script.js loaded");

document.addEventListener("DOMContentLoaded", () => {
  // 2. Cek DOM sudah siap
  console.log("DOM ready, attaching click handlers");

  const navLinks = document.querySelectorAll("nav a");
  navLinks.forEach(link => {
    // 3. Cek click handler jalan
    link.addEventListener("click", () => {
      console.log("🔘 clicked:", link.textContent);

      link.classList.remove("clicked");
      void link.offsetWidth; // reset animasi
      link.classList.add("clicked");
    });
  });
});
