let homeVal = 12;
let guestVal = 5;

let homeParentVal = document.getElementById("home-points-text");
let guestParentVal =  document.getElementById("guest-points-text");;

homeParentVal.innerText = homeVal;
guestParentVal.innerText = guestVal;

function homeOne() {
    homeVal += 1;
    homeParentVal.innerText =  homeVal;
}

function homeTwo() {
    homeVal += 2;
    homeParentVal.innerText =  homeVal;
}

function homeThree() {
    homeVal += 3;
    homeParentVal.innerText =  homeVal;
}
// guest score card
function guestOne() {
    guestVal += 1;
    guestParentVal.innerText =  guestVal;
}

function guestTwo() {
    guestVal += 2;
    guestParentVal.innerText =  guestVal;
}

function guestThree() {
    guestVal += 3;
    guestParentVal.innerText =  guestVal;
}