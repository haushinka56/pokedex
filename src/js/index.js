const changeThemeButton = document.getElementById("button-theme");
const body = document.querySelector("body");
const imageChangeThemeButton = document.querySelector(".button-image");

const changeTheme = () => {
  body.classList.toggle("dark-mode");

  const darkMode = body.classList.contains("dark-mode");

  imageChangeThemeButton.setAttribute(
    "src",
    darkMode ? "./src/images/moon.png" : "./src/images/sun.png"
  );
};

changeThemeButton.addEventListener("click", changeTheme);
