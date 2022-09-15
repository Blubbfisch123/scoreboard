const homecounterEl = document.getElementById("homecounter-el")
const guestcounterEl = document.getElementById("guestcounter-el")

let homecounter = 0
let guestcounter = 0

function setguestcounter(){
    guestcounterEl.textContent = guestcounter
}
function sethomecounter(){
    homecounterEl.textContent = homecounter
}

function homeplusone(){
    homecounter += 1
    sethomecounter()
}

function homeplustwo(){
    homecounter += 2
    sethomecounter()
}

function homeplusthree(){
    homecounter += 3
    sethomecounter()
}

function guestplusone(){
    guestcounter += 1
    setguestcounter()
}

function guestplustwo(){
    guestcounter += 2
    setguestcounter()
}

function guestplusthree(){
    guestcounter += 3
    setguestcounter()
}

function resetscore(){
    guestcounter = 0
    homecounter = 0
    setguestcounter()
    sethomecounter()
}