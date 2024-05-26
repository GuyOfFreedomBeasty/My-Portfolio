const selectionChoises = document.getElementsByClassName("selection-choise")

function SwitchSelection(){
    console.log("hi");
}

for (var i = 0; i < selectionChoises.length; i++){
    selectionChoises[i].addEventListener("click", selectionChoises)
}