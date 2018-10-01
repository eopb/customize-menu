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