let myLinkToIn = document.getElementById("link--in");
let myLinkToHh = document.getElementById("link--hh");
// let myButtonSkills = document.getElementById("pressTitleSkill");
let myDivForSkills = document.getElementById("getListSkills");
let myDivAnimation = document.getElementById("div--animation");

let listSkills = [
    "Работоспособность",
    "Ответственность",
    "Навыки работы, настройки и установки OS Windows",
    "Навыки работы, настройки и установки OS Linux",
    "Навыки работы системным администратором",
    "Git",
    "HTML",
    "CSS",
    "SQLite",
    "MariaDB",
    "Python",
    "Django Framework",
    "Docker",
    "Frappe Framework",
    "ERP",
    "Linux",
    "ООП",
    "PostgreSQL",
    "HTML5",
    "CSS3",
    "JavaScript",
    "Java",
    "Настройка ПК",
    "Пользователь ПК",
    "Сборка ПК",
    "1С программирование",
    "React JS",
    "CMS Wordpress",
    "ERP Systems",
    "Vue",
    "Bootstrap"
];

let statusSkills = false;

function getElementSkill() {
    if(statusSkills ===  false) {
        let elementSkill = document.createElement("div");
        elementSkill.style.display = "liner";

        for(let item of listSkills) {
            let el = document.createElement("span");
            el.innerText = item;
            el.style.backgroundColor = "rgb(231 241 255)";
            el.style.color = "black";
            el.style.marginLeft = "5px";
            el.style.height = "20px";
            el.style.padding = "5px";
            el.style.borderRadius = "15px";
    
            elementSkill.append(el);
        };

        myDivForSkills.append(elementSkill);    
        statusSkills = true;
    };
};

function getRandomeNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

function animationForMyPage(nameDiv) {    
    for(let _ of Array(4)) {
        let newDiv = document.createElement("div");

        newDiv.style.width = "20px";
        newDiv.style.height = "20px";
        newDiv.style.backgroundColor = "black";
        newDiv.style.animation = "animationForPage " + getRandomeNumber(4, 12) + "s infinite ease";
    
        nameDiv.append(newDiv);
    };
};

myLinkToIn.addEventListener("click", function() {
    document.location.href = "https://www.linkedin.com/in/rustem-muratbekov-2a139b225";
});
myLinkToHh.addEventListener("click", function() {
    document.location.href = "https://almaty.hh.kz/resume/26b31f66ff0919c1bf0039ed1f6d356f366e4e";
});

// Get list skill
// myButtonSkills.addEventListener("click", getElementSkill);
getElementSkill();

animationForMyPage(myDivAnimation);

// Code for test...
console.log("JS run...");