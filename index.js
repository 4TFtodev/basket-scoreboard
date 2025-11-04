let counterHome = document.getElementById("counter-home");
let countHome = 0;

    function addOneHome() {
        countHome += 1;
        counterHome.textContent = countHome;
    }

    function addTwoHome() {
        countHome += 2;
        counterHome.textContent = countHome;
    }

    function addThreeHome() {
        countHome += 3;
        counterHome.textContent = countHome;
    }

let counterAway = document.getElementById("counter-away");
let countAway = 0;

    function addOneAway() {
        countAway += 1;
        counterAway.textContent = countAway;
    }

    function addTwoAway() {
        countAway += 2;
        counterAway.textContent = countAway;
    }

    function addThreeAway() {
        countAway += 3;
        counterAway.textContent = countAway;
    }

    // Reset functions

function resetHome() {
    countHome = 0;
    counterHome.textContent = countHome;
}

function resetAway() {
    countAway = 0;
    counterAway.textContent = countAway;
}