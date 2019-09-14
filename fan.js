var circle = document.getElementById("circle")

function startRotation() {
    circle.style.animation = "fan-rotation 0.5s infinite steps(100)"
}

function stopRotation() {
    circle.style.animation = "none"
}

function increaseRotation() {
    circle.style.animationDuration = "0.10s"
}

function decreaseRotation() {
    circle.style.animationDuration = "5s"
}