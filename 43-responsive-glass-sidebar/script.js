const sidebar = document.querySelector('.sidebar')
const navItems = document.querySelectorAll('nav .nav-item')
const toggle = document.querySelector('.sidebar .toggle')

toggle.addEventListener('click', () => {
    sidebar.classList.toggle('open')
})

navItems.forEach(navItem => {
    navItem.addEventListener('click', () => {

        // remover .active de todos os navItem
        navItems.forEach(navItem => {
            navItem.classList.remove('active')
        })

        // adicionar .active no navItem clicado
        navItem.classList.add('active')

    })
})