function navigateTo(url) {
    window.location.href = url;
}

function handleNavigation(event, url) {
    if (event.button === 0) { // Левая кнопка мыши
        navigateTo(url);
    } else if (event.button === 1) { // Средняя кнопка мыши
        window.open(url, "_blank"); // Открывает в новой вкладке
    }
}

const clickableDivGithub = document.getElementById("div-with-github");
const clickableDivLinkedin = document.getElementById("div-with-linkedin");
const clickableDivHH = document.getElementById("div-with-hh");
const clickableSetr1 = document.getElementById("div-body-setrificate-container-item-1");
const clickableSetr2 = document.getElementById("div-body-setrificate-container-item-2");
const clickableSetr3 = document.getElementById("div-body-setrificate-container-item-3");
const clickableSetr4 = document.getElementById("div-body-setrificate-container-item-4");
const clickableSetr5 = document.getElementById("div-body-setrificate-container-item-5");
const clickableSetr6 = document.getElementById("div-body-setrificate-container-item-6");
const clickableSetr7 = document.getElementById("div-body-setrificate-container-item-7");
const clickableSetr8 = document.getElementById("div-body-setrificate-container-item-8");
const clickableSetr9 = document.getElementById("div-body-setrificate-container-item-9");

clickableDivGithub.addEventListener("mousedown", (event) => handleNavigation(event, "https://github.com/my-app-s"));
clickableDivLinkedin.addEventListener("mousedown", (event) => handleNavigation(event, "https://www.linkedin.com/in/rustem-m-692916334"));
clickableDivHH.addEventListener("mousedown", (event) => handleNavigation(event, "https://hh.ru/resume/c88917e1ff0e3ec76d0039ed1f695343343372"));
clickableSetr1.addEventListener("mousedown", (event) => handleNavigation(event, "https://stepik.org/cert/1028496?lang=en"));
clickableSetr2.addEventListener("mousedown", (event) => handleNavigation(event, "https://www.sololearn.com/en/certificates/CT-NDOUR87X"));
clickableSetr3.addEventListener("mousedown", (event) => handleNavigation(event, "https://www.sololearn.com/en/certificates/CT-BQ6T9O18"));
clickableSetr4.addEventListener("mousedown", (event) => handleNavigation(event, "https://www.sololearn.com/en/certificates/CT-KIWHL5L7"));
clickableSetr5.addEventListener("mousedown", (event) => handleNavigation(event, "https://www.sololearn.com/en/certificates/CT-ETRVSDXT"));
clickableSetr6.addEventListener("mousedown", (event) => handleNavigation(event, "https://www.sololearn.com/en/certificates/CT-PNPTUELV"));
clickableSetr7.addEventListener("mousedown", (event) => handleNavigation(event, "https://www.sololearn.com/en/certificates/CT-K5PCIELQ"));
clickableSetr8.addEventListener("mousedown", (event) => handleNavigation(event, "https://stepik.org/cert/2532641?lang=en"));
clickableSetr9.addEventListener("mousedown", (event) => handleNavigation(event, "https://stepik.org/cert/2827910?lang=en"));

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
