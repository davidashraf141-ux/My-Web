document.addEventListener("DOMContentLoaded", () => {
     // Check for saved theme in localStorage
     const savedTheme = localStorage.getItem("theme");
      if (savedTheme) {
        document.body.classList.add(savedTheme);
        const toggleBtn = document.getElementById("theme-toggle");
        if (savedTheme === "dark") {
          toggleBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
        } else {
          toggleBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
        }
      }
    }
  );


const toggleBtn = document.getElementById("theme-toggle");

    toggleBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark");

        if (document.body.classList.contains("dark")) {
          toggleBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
          localStorage.setItem("theme", "dark");
        } else {
          toggleBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
          localStorage.setItem("theme", "light");
        }
    }
);