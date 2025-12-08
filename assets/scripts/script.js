const languageButton = document.getElementById("languageButton")
const languageSelection = document.getElementById("languageSelection")
const frenchLanguage = document.getElementById("frenchLanguage")
const englishLanguage = document.getElementById("englishLanguage")
const japaneseLanguage = document.getElementById("japaneseLanguage")
const nextProject = document.getElementById("nextButton")
const previousProject = document.getElementById("previousButton")

let isOpen
let frenchElements = document.querySelectorAll(".fre")
let englishElements = document.querySelectorAll(".eng")
let japaneseElements = document.querySelectorAll(".jap")
let activeProject = document.querySelector("article.active")

languageButton.addEventListener("click", () => {
    if (isOpen) {
        languageSelection.close()
        isOpen = false
    } else {
        languageSelection.show()
        isOpen = true
    }
})

frenchLanguage.addEventListener("click", () => {
    languageSelection.close()
    frenchElements.forEach(element => {
        element.style.display = "block"
    });
    englishElements.forEach(element => {
        element.style.display = "none"
    });
    japaneseElements.forEach(element => {
        element.style.display = "none"
    });
})

englishLanguage.addEventListener("click", () => {
    languageSelection.close()
    frenchElements.forEach(element => {
        element.style.display = "none"
    });
    englishElements.forEach(element => {
        element.style.display = "block"
    });
    japaneseElements.forEach(element => {
        element.style.display = "none"
    });
})

japaneseLanguage.addEventListener("click", () => {
    languageSelection.close()
    frenchElements.forEach(element => {
        element.style.display = "none"
    });
    englishElements.forEach(element => {
        element.style.display = "none"
    });
    japaneseElements.forEach(element => {
        element.style.display = "block"
    });
})

document.querySelector("article.active div.moreButton").addEventListener("click", (e) => {
    if (e.target.textContent == ">") {
        activeProject.style.width = `${(activeProject.offsetWidth - 16) * 2}px`
        document.querySelector("article.active div:not(.moreButton) div:not(.moreSection)").style.width = "45%"
        document.querySelector("article.active .moreSection").style.display = "flex"
        document.querySelector("article.active .moreButton p").textContent = "<"
    } else {
        activeProject.style.width = `${(activeProject.offsetWidth - 16) / 2}px`
        document.querySelector("article.active div:not(.moreButton) div:not(.moreSection)").style.width = "100%"
        document.querySelector("article.active .moreSection").style.display = "none"
        document.querySelector("article.active .moreButton p").textContent = ">"
    }
})

nextProject.addEventListener("click", () => {
    console.log("Projet suivant");
})

previousProject.addEventListener("click", () => {
    console.log("Projet précédent");
})