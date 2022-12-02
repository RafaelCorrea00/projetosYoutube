// Navigation
const toggle = document.querySelector('.toggle')
const navigation = document.querySelector('.navigation')
toggle.onclick = function() {
    toggle.classList.toggle('active')
    navigation.classList.toggle('active')
}


// Slider
const slides = document.querySelectorAll('.slides')
const dots = document.querySelectorAll('.dot')

function setActive(item) {
    for(let slide of slides){
        slide.classList.remove('active')
        slides[item].classList.add('active')
    }

    for(let dot of dots){
        dot.classList.remove('active')
        dots[item].classList.add('active')
    }
}

for (let i = 0; i < dots.length; i++) {
    dots[i].addEventListener('click', () => {
        setActive(i)
    })
}