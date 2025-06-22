let home = 0;

function plus1() {
    home += 1;
    document.getElementById("home-count").textContent = home;
    highlightLeader();
}

function plus2() {
    home += 2;
    document.getElementById("home-count").textContent = home;
    highlightLeader();
} 

function plus3() {
    home += 3;
    document.getElementById("home-count").textContent = home;
    highlightLeader();
}

let guest = 0;

function gplus1() {
    guest += 1;
    document.getElementById("guest-count").textContent = guest;
    highlightLeader();
}

function gplus2() {
    guest += 2;
    document.getElementById("guest-count").textContent = guest;
    highlightLeader();
} 

function gplus3() {
    guest += 3;
    document.getElementById("guest-count").textContent = guest;
    highlightLeader();
}

function newgame() {
    home = 0;
    guest = 0;
    document.getElementById("guest-count").textContent = home;
    document.getElementById("home-count").textContent = guest;
    highlightLeader();
}

function highlightLeader() {
const homeCountEl = document.getElementById("home-count");
const guestCountEl = document.getElementById("guest-count");

const homeScore = parseInt(homeCountEl.textContent);
const guestScore = parseInt(guestCountEl.textContent);

homeCountEl.classList.remove("highlight");
guestCountEl.classList.remove("highlight");

if (homeScore > guestScore) {
    homeCountEl.classList.add("highlight");
} else if (guestScore > homeScore) {
    guestCountEl.classList.add("highlight");
}
}

function leader() {
    home++;
    document.getElementById("home-count").textContent = homeScore;
}
