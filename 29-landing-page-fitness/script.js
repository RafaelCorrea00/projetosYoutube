const image = document.querySelector('.main')
const title = document.querySelector('.text h1')
const subtitle = document.querySelector('.text h3')
let toggle = false

function changeOne(){
    console.log("executando troca 01")
    image.style.backgroundImage = "url('./images/gym02.jpg')"
    image.style.transition = "all 2s ease"
    title.innerHTML = "Progress"
    subtitle.innerHTML = "Enjoy the glow of Good Health"
}

function changeTwo(){
    console.log("executando troca 02")
    image.style.backgroundImage = "url('./images/gym01.jpg')"
    image.style.transition = "all 2s ease"
    title.innerHTML = "Perfection"
    subtitle.innerHTML = "Take care of your body"
}

setInterval(() => {
    if(toggle === false){
        changeOne()
        toggle = true
    }
    else if(toggle === true){
        changeTwo()
        toggle = false
    }
}, 5000)