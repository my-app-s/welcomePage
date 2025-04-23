function navigateTo(url) {
    window.location.href = url;
}

const clickableDivGithub = document.getElementById("div-with-github");
const clickableDivLinkedin = document.getElementById("div-with-linkedin");
const clickableDivHH = document.getElementById("div-with-hh");

clickableDivGithub.addEventListener("click", () => navigateTo("https://github.com/my-app-s"));
clickableDivLinkedin.addEventListener("click", () => navigateTo("https://www.linkedin.com/in/rustem-m-692916334"));
clickableDivHH.addEventListener("click", () => navigateTo("https://hh.ru/resume/c88917e1ff0e3ec76d0039ed1f695343343372"));

document.addEventListener("contextmenu", function (e) {
    e.preventDefault(); // Отключает контекстное меню
});

document.addEventListener("keydown", function (e) {
    if (e.ctrlKey && (e.key === "c" || e.key === "u" || e.key === "s")) {
        e.preventDefault(); // Отключает сочетания Ctrl+C, Ctrl+U, Ctrl+S
    }
});

document.addEventListener("dragstart", function (e) {
    e.preventDefault(); // Отключает перетаскивание
});

document.addEventListener("keydown", function (e) {
    if (e.key === "F12" || (e.ctrlKey && e.shiftKey && e.key === "I")) {
        e.preventDefault();
        alert("Открытие панели разработчика запрещено.");
    }
});