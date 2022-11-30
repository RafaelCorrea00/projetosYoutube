/*
    Pré-Carregamento da Página
*/
let loader = document.querySelector('.preloader')
window.addEventListener('load', function() {
    loader.style.display = 'none'
})

/*
    Botão de Scroll para o Topo da Página
*/
function showScrollTopBtn() {
    if(
        document.body.scrollTop > 400 ||
        document.documentElement.scrollTop > 400){
            document.querySelector('#scrollTop').style.opacity = '1'
    }
    else {
        document.querySelector('#scrollTop').style.opacity = '0'
    }
}

window.addEventListener('scroll', showScrollTopBtn)

/* 
    Mudar o design do Menu/Cabeçalho
    quando fizer scroll da página
 */
let pages = document.querySelectorAll('.pages')

function changeHeader(){
    if(
        document.body.scrollTop > 150 ||
        document.documentElement.scrollTop > 150) {
            document.querySelector('nav').classList.add('change-header')
            document.querySelector('h2').classList.add('change-header')

            pages.forEach((item) => {
                item.style.color = '#FFF'
            })
    }
    else {
        document.querySelector('nav').classList.remove('change-header')
        document.querySelector('h2').classList.remove('change-header')

        pages.forEach((item) => {
            item.style.color = '#000'
        })
    }
}

window.addEventListener('scroll', changeHeader)


/*
    Uma imagem aparece sobre a outra
    quando passar o mouse por cima (Hover)
*/
let island01 = document.querySelector('#island01')
let island02 = document.querySelector('#island02')

island02.addEventListener('mouseover', function(event){
    island02.style.zIndex = '4'
})

island02.addEventListener('mouseout', function(event){
    island02.style.zIndex = '1'
})

/*
    SwiperJS para o 'Explore'
    Carrossel de imagens com efeito slider
*/
var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: false,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 20,
        modifier: 1,
        slideShadows: false,
    },
    pagination: {
        el: ".swiper-pagination",
    },
});

/*
    Botões Play e Pause do Vídeo
*/
let video = document.querySelector('video')
let playpause = document.querySelector('#playpause')
let playbtn = document.querySelector('#playbtn')
let pausebtn = document.querySelector('#pausebtn')

function playPause() {
    if(video.paused) {
        video.play()

        pausebtn.style.visibility = 'visible'
        pausebtn.style.opacity = '1'
        playbtn.style.visibility = 'hidden'
        playbtn.style.opacity = '0'
    }
    else {
        video.pause()

        playbtn.style.visibility = 'visible'
        playbtn.style.opacity = '1'
        pausebtn.style.visibility = 'hidden'
        pausebtn.style.opacity = '0'
    }
}

playpause.addEventListener('click', playPause)

/*
    Funções de Scroll
*/
function scrollToTop() {
    window.scrollTo(0, 0)
}

function scrollToAbout() {
    const about = document.querySelector('#about')
    about.scrollIntoView()
}

function scrollToExplore() {
    const explore = document.querySelector('#explore')
    explore.scrollIntoView()
}

function scrollToTour() {
    const tour = document.querySelector('#tour')
    tour.scrollIntoView()
}

function scrollToIslands() {
    const islands = document.querySelector('#islands')
    islands.scrollIntoView()
}

function scrollToBooking() {
    const booking = document.querySelector('#booking')
    booking.scrollIntoView()
}