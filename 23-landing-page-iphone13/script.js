// Função que muda o celular
function imgSlider(e) {
    document.querySelector('#phone').src = e
}

// Função que muda a cor de círculo ao fundo
function circleChange(color) {
    const circle = document.querySelector('.circle')
    circle.style.background = color
}