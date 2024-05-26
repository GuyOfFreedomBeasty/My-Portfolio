const selectionChoises = document.getElementsByClassName("selection-choise")
const infoSection = document.getElementsByClassName("info-section")

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