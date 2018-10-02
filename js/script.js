function toggleStyle() {
    var body = document.getElementById("bodyID");
    if (body.style.color === "white") {
        body.style.color = "black";
        body.style.background = "white";
    } else {
        body.style.color = "white";
        body.style.background = "black";
    }
}

function largeFont() {
    var parag = document.getElementById("parag");
    parag.style.fontSize = "50px";
}

function mediumFont() {
    var parag = document.getElementById("parag");
    parag.style.fontSize = "25px";
}

function smallFont() {
    var parag = document.getElementById("parag");
    parag.style.fontSize = "16px";
}

function addText() {
    document.getElementById("parag").innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum!";
}