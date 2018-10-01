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