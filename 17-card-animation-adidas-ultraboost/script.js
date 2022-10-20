const tenis1 = document.getElementById("tenis-1")
const tenis2 = document.getElementById("tenis-2")

const setaRight = document.getElementById("right")
const setaLeft = document.getElementById("left")

setaLeft.addEventListener("click", () => {
    tenis1.style.left = "650px"
    tenis2.style.left = "-50px"
})

setaRight.addEventListener("click", () => {
    tenis1.style.left = "-50px"
    tenis2.style.left = "-650px"
})