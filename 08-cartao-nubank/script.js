const card = document.querySelector('.container')

card.addEventListener('mousemove', cardEffect)
card.addEventListener('mouseleave', cardBack)
card.addEventListener('mouseenter', cardEnter)

function cardEffect(event) {
    const cardWidth = card.offsetWidth
    const cardHeight = card.offsetHeight
    const centerX = card.offsetLeft + cardWidth / 2
    const centerY = card.offsetTop + cardHeight / 2
    const positionX = event.clientX - centerX
    const positionY = event.clientY - centerY

    const rotateX = +((+1) * 25 * positionY / (cardHeight / 2)).toFixed(2)
    const rotateY = +((-1) * 25 * positionX / (cardWidth / 2)).toFixed(2)

    // Aplicando o efeito 3D no style | importaante usar 'perspective'
    card.style.transform = `perspective(500px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`

    /*
        canto superior esquerdo | X negativo & Y negativo
        canto superior direito | X positivo & Y negativo

        canto inferiror esquerdo | X negativo & Y positivo
        canto inferior direito | X positivo & Y positivo
    */

}

function cardBack(event) {
    // Resetando o efeito 3D do style
    card.style.transform = `perspective(500px) rotateX(${0}deg) rotateY(${0}deg)`
    cardTransition()
}

function cardTransition() {
    // Suavizando entrada e saida do mouse no cartão
    clearInterval(card.transitionId)
    card.style.transition = 'transform 400ms'
    card.transitionId = setTimeout(() => {
        card.style.transition = ''
    }, 400);
}

function cardEnter(event) {
    cardTransition()
}