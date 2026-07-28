// 手机端导航菜单
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector("#nav-links");

navToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

// 点击导航链接后自动收起手机菜单
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

// 页脚年份自动更新
document.querySelector("#current-year").textContent = new Date().getFullYear();

// 返回顶部按钮
const backToTop = document.querySelector("#back-to-top");

window.addEventListener("scroll", () => {
  backToTop.classList.toggle("show", window.scrollY > 500);
});

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
