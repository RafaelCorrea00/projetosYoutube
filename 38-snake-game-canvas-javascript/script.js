window.onload = function () {

    let stage = document.getElementById('stage')
    let ctx = stage.getContext('2d')

    document.addEventListener("keydown", keyPush)

    setInterval(game, 100)

    let speed = 1

    let speedX = 0
    let speedY = 0
    let positionX = 10
    let positionY = 15

    let lengthPiece = 20
    let quantityPiece = 30
    let appleX = 15
    let appleY = 15

    let trail = []
    let tail = 5


    function game() {
        positionX += speedX
        positionY += speedY

        // posicionamento da cobrinha
        if (positionX < 0) {
            positionX = quantityPiece - 1
        }

        if (positionX > quantityPiece - 1) {
            positionX = 0
        }

        if (positionY < 0) {
            positionY = quantityPiece - 1
        }

        if (positionY > quantityPiece - 1) {
            positionY = 0
        }

        // pintando o stage
        ctx.fillStyle = "black"
        ctx.fillRect(0, 0, stage.width, stage.height)

        // pintando a maçã
        ctx.fillStyle = "red"
        ctx.fillRect(appleX * lengthPiece, appleY * lengthPiece, lengthPiece, lengthPiece)

        // pitando a cobra e o rastro
        ctx.fillStyle = "gray"
        for (let i = 0; i < trail.length; i++) {
            ctx.fillRect(trail[i].x * lengthPiece, trail[i].y * lengthPiece, lengthPiece - 1, lengthPiece - 1)

            // GAME OVER
            if (trail[i].x == positionX && trail[i].y == positionY) {
                speedX = 0
                speedY = 0
                tail = 5
            }
        }

        // Mensagem de GAME OVER e Recarrega a Página
        if(trail.length > 5 && speedX == 0 && speedY == 0) {
            const gameOver = document.querySelector('.game-over')
            const gameoverButton = document.querySelector('button')
            gameOver.style.visibility = 'visible'
            speed = 0
            gameoverButton.addEventListener('click', () => location.reload())
            document.addEventListener('keydown', (event) => {
                if(event.key == 'Enter'){
                    location.reload()
                }
            })
        }
        
        trail.push({ x: positionX, y: positionY })
        while (trail.length > tail) {
            trail.shift()
        }

        if (appleX == positionX && appleY == positionY) {
            tail++
            appleX = Math.floor(Math.random() * quantityPiece)
            appleY = Math.floor(Math.random() * quantityPiece)
        }
    }

    // teclas de controle
    function keyPush(event) {
        switch(event.keyCode) {
            case 37: // Left
                speedX = -speed
                speedY = 0
                break
            case 38: // Up
                speedX = 0
                speedY = -speed
                break
            case 39: // Right
                speedX = speed
                speedY = 0
                break
            case 40: // Down
                speedX = 0
                speedY = speed
                break
            default:
                break
        }
    }
}