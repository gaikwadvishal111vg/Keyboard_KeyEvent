
let displayKeyNumber = document.getElementById("displayKeyNumber"); 
let displayKeyName = document.getElementById("displayKeyName");

document.onkeydown = (event) =>{
   displayKeyName.innerHTML = `<span>YOU PRESSED =</span> <span class="= displayKeyNumberColor">${event.key}</span>`;
   displayKeyNumber.innerHTML = `<span></span> <span class="displayKeyNumberColor">${event.keyCode} </span>`;

}