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
const clickableCetr1 = document.getElementById("div-body-cetrificate-container-item-1");
const clickableCetr2 = document.getElementById("div-body-cetrificate-container-item-2");
const clickableCetr3 = document.getElementById("div-body-cetrificate-container-item-3");
const clickableCetr4 = document.getElementById("div-body-cetrificate-container-item-4");
const clickableCetr5 = document.getElementById("div-body-cetrificate-container-item-5");
const clickableCetr6 = document.getElementById("div-body-cetrificate-container-item-6");
const clickableCetr7 = document.getElementById("div-body-cetrificate-container-item-7");
const clickableCetr8 = document.getElementById("div-body-cetrificate-container-item-8");
const clickableCetr9 = document.getElementById("div-body-cetrificate-container-item-9");
const clickableCetr10 = document.getElementById("div-body-cetrificate-container-item-10");
const clickableCetr11 = document.getElementById("div-body-cetrificate-container-item-11");
const clickableCetr12 = document.getElementById("div-body-cetrificate-container-item-12");

clickableDivGithub.addEventListener("mousedown", (event) => handleNavigation(event, "https://github.com/my-app-s"));
clickableDivLinkedin.addEventListener("mousedown", (event) => handleNavigation(event, "https://www.linkedin.com/in/rustem-m-692916334"));
clickableDivHH.addEventListener("mousedown", (event) => handleNavigation(event, "https://hh.ru/resume/c88917e1ff0e3ec76d0039ed1f695343343372"));
clickableCetr1.addEventListener("mousedown", (event) => handleNavigation(event, "https://stepik.org/cert/1028496?lang=en"));
clickableCetr2.addEventListener("mousedown", (event) => handleNavigation(event, "https://www.sololearn.com/en/certificates/CT-NDOUR87X"));
clickableCetr3.addEventListener("mousedown", (event) => handleNavigation(event, "https://www.sololearn.com/en/certificates/CT-BQ6T9O18"));
clickableCetr4.addEventListener("mousedown", (event) => handleNavigation(event, "https://www.sololearn.com/en/certificates/CT-KIWHL5L7"));
clickableCetr5.addEventListener("mousedown", (event) => handleNavigation(event, "https://www.sololearn.com/en/certificates/CT-ETRVSDXT"));
clickableCetr6.addEventListener("mousedown", (event) => handleNavigation(event, "https://www.sololearn.com/en/certificates/CT-PNPTUELV"));
clickableCetr7.addEventListener("mousedown", (event) => handleNavigation(event, "https://www.sololearn.com/en/certificates/CT-K5PCIELQ"));
clickableCetr8.addEventListener("mousedown", (event) => handleNavigation(event, "https://stepik.org/cert/2532641?lang=en"));
clickableCetr9.addEventListener("mousedown", (event) => handleNavigation(event, "https://stepik.org/cert/2827910?lang=en"));
clickableCetr10.addEventListener("mousedown", (event) => handleNavigation(event, "https://stepik.org/cert/2899658?lang=en"));
clickableCetr11.addEventListener("mousedown", (event) => handleNavigation(event, "https://stepik.org/cert/2981157?lang=en"));
clickableCetr12.addEventListener("mousedown", (event) => handleNavigation(event, "https://stepik.org/cert/2950603?lang=en"));

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
