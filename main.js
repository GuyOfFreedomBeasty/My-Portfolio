const selectionChoises = document.getElementsByClassName("selection-choise")
const infoSection = document.getElementsByClassName("info-section")
const easterEggText = document.getElementById("easter-egg-text")
const soundToPlay = new Audio('audio/hee-hee.mp3')

const navUl = document.getElementsByClassName("navigation-ul")[0]
const openBarMenu = document.getElementsByClassName("fa-bars")[0]
const closeBarMenu = document.getElementsByClassName("fa-x")[0]

function SwitchSelection(){
    for (var i = 0; i < selectionChoises.length; i++){
        selectionChoises[i].classList.remove("selected-section-choise")
    }
    for (var i = 0; i < infoSection.length; i++){
        infoSection[i].classList.remove("selected-section")
    }

    const selectionToDisplayName = this.getAttribute("data-section-name")
    const sectionToDisplay = document.getElementById(selectionToDisplayName)
    
    this.classList.add("selected-section-choise")
    sectionToDisplay.classList.add("selected-section")
}

for (var i = 0; i < selectionChoises.length; i++){
    selectionChoises[i].addEventListener("click", SwitchSelection)
}

easterEggText.addEventListener("click", function(){
    soundToPlay.play();
})

openBarMenu.addEventListener("click", function(){
    navUl.style.right = "0" 
    console.log("made the right 0")
})

closeBarMenu.addEventListener("click", function(){
    navUl.style.right = "-400px"
})