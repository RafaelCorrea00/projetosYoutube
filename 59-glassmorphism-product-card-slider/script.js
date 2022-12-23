const size = document.querySelectorAll('.size li')

function changeImageSrc(anything) {
    document.querySelector('.shoes').src = anything
}

function selectedItem(){
    size.forEach((item) => {
        item.classList.remove('selected')
        this.classList.add('selected')
    })
}

size.forEach((item) => {
    item.addEventListener('click', selectedItem)
})



