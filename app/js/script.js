const menuIcon = document.querySelector(".menu-icon"),
  closeIcon = document.querySelector(".close-icon");

const header = document.querySelector(".header");
header.style.height = `${header.querySelector(".header-top").clientHeight}px`;

function closeOpen() {
  header.classList.toggle("active");

  menuIcon.classList.toggle("hide");
  closeIcon.classList.toggle("hide");

  header.classList.contains("active")
    ? (header.style.height = `${header.scrollHeight}px`)
    : (header.style.height = `${
        header.querySelector(".header-top").clientHeight
      }px`);
}

menuIcon.addEventListener("click", closeOpen);
closeIcon.addEventListener("click", closeOpen);
