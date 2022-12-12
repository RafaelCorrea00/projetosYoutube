const emailInput = document.querySelector('.email-input')
const passInput = document.querySelector('.pass-input')

emailInput.addEventListener('click', () => {
    emailInput.value = ''
})

passInput.addEventListener('click', () => {
    passInput.value = ''
})