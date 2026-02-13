
function moveButton() {
    var button = document.getElementById("noBtn");
    var x = Math.random() * window.innerWidth;
    var y = Math.random() * window.innerHeight;
    button.style.left = x + "px";
    button.style.top = y + "px";
}

function celebrate() {
    document.getElementById("celebration").style.display = "block";
    createHearts();
}

function createHearts() {
    setInterval(function () {
        var heart = document.createElement("div");
        heart.className = "hearts";
        heart.innerHTML = "💖";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.fontSize = Math.random() * 20 + 20 + "px";
        document.body.appendChild(heart);

        setTimeout(function () {
            heart.remove();
        }, 5000);
    }, 300);
}
