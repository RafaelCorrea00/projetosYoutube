# 3 Formas de Fazer Menu Mobile Responsivo

## 1° checkbox
- Usando input checkbox e trabalhando pseudo-classe checked no CSS

- Vantagens:
    - É um pouco mais simples, pois trabalha apenas HTML e CSS
    - Funciona no mobile e no desktop
- Desvantagens:
    - Gambiarra, não é muito profissional embora funcione
    
```css
    .label-menu, .checkbox {
        display: none;
    }

    @media (max-width: 600px) {
        .menu {
            display: block;
            position: absolute;
            top: 4.6875rem;
            left: 0;
            background: var(--royal-blue-light);
            text-align: center;
            width: 100%;
            height: 0;
            z-index: 1;
            visibility: hidden;
            overflow-y: hidden;
            transition: 0.5s;
        }

        .menu a {
            padding: 1rem 0;
            margin-inline: 1rem;
            border-bottom: 0.0625rem solid rgba(0, 0, 0, 0.16);
            border-radius: 0;
        }

        .label-menu {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            color: var(--white);
            padding-block: 1rem;
            cursor: pointer;
        }

        .hamburguer {
            border-top: 0.125rem solid;
            width: 1.25rem;
        }
        
        .hamburguer::before,
        .hamburguer::after {
            content: ' ';
            display: block;
            width: 1.25rem;
            height: 0.125rem;
            background: currentColor;
            margin-top: 0.3125rem;
            position: relative;
            transition: 0.3s;
        }

        .checkbox:checked ~ .menu {
            height: calc(100vh - 4.6875rem);
            visibility: visible;
            overflow-y: auto;
        }

        .checkbox:checked ~ .label-menu .hamburguer {
            border-top-color: transparent;
        }

        .checkbox:checked ~ .label-menu .hamburguer::before {
            transform: rotate(135deg);
        }

        .checkbox:checked ~ .label-menu .hamburguer::after {
            transform: rotate(-135deg);
            top: -0.4375rem;
        }
    }
```

## 2° focus-within
- Usando button e trabalhando pseudo-classe focus-within no CSS

- Vantagens:
    - É um pouco mais simples, pois trabalha apenas HTML e CSS
- Desvantagens:
    - Nao funciona no mobile, apenas no desktop
    - Gambiarra, não é muito profissional embora funcione no desktop
    
```css
    .btn-menu {
    display: none;
}

    @media (max-width: 600px) {
    .menu {
        display: block;
        position: absolute;
        top: 4.6875rem;
        left: 0;
        background: var(--royal-blue-light);
        text-align: center;
        width: 100%;
        height: 0;
        z-index: 1;
        visibility: hidden;
        overflow-y: hidden;
        transition: 0.5s;
    }

    .menu a {
        padding: 1rem 0;
        margin-inline: 1rem;
        border-bottom: 0.0625rem solid rgba(0, 0, 0, 0.16);
        border-radius: 0;
    }

    .btn-menu {
        background: none;
        border: none;
        font: inherit;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        color: var(--white);
        padding-block: 1rem;
        cursor: pointer;
    }

    .hamburguer {
        border-top: 0.125rem solid;
        width: 1.25rem;
    }

    .hamburguer::before,
    .hamburguer::after {
        content: ' ';
        display: block;
        width: 1.25rem;
        height: 0.125rem;
        background: currentColor;
        margin-top: 0.3125rem;
        position: relative;
        transition: 0.3s;
    }

    .nav:focus-within .menu {
        height: calc(100vh - 4.6875rem);
        visibility: visible;
        overflow-y: auto;
    }

    .nav:focus-within .hamburguer {
        border-top-color: transparent;
    }

    .nav:focus-within .hamburguer::before {
        transform: rotate(135deg);
    }

    .nav:focus-within .hamburguer::after {
        transform: rotate(-135deg);
        top: -0.4375rem;
    }
}
```

## 3° javascript
- Usando button e trabalhando a classe active dinamicamente no JavaScript

- Vantagens:
    - Funciona bem no mobile e no desktop com eventos de click e touch
    - Permite maior acessibilidade alterando o aria-label do HTML de 'Menu Fechado' para 'Menu Aberto'
- Desvantagens:
    - É um pouquinho mais complexo e trabalhoso para desenvolver (mas vale o esforço)

```js
const nav = document.querySelector('.nav')
const btnMenu = document.querySelector('.btn-menu')
const menu = document.querySelector('.menu')

function handleButtonClick(event) {
    if (event.type === 'touchstart') {
        event.preventDefault()
        event.stopPropagation()
    }
    nav.classList.toggle('active')

    handleClickOutside(menu, () => {
        nav.classList.remove('active')
        setAria()
    })
    setAria()
}

function handleClickOutside(targetElement, callback) {
    const html = document.documentElement

    function handleHTMLClick(event) {
        if(!targetElement.contains(event.target)){
            targetElement.removeAttribute('data-target')
            html.removeEventListener('click', handleHTMLClick)
            html.removeEventListener('touchstart', handleHTMLClick)
            callback()
        }
    }

    if(!targetElement.hasAttribute('data-target')) {
        html.addEventListener('click', handleHTMLClick)
        html.addEventListener('touchstart', handleHTMLClick)
        targetElement.setAttribute('data-target', '')
    }
}

function setAria() {
    const isActive = nav.classList.contains('active')
    btnMenu.setAttribute('aria-expanded', isActive)
    
    if (isActive) {
        btnMenu.setAttribute('arial-label', 'Fechar Menu')
    } else {
        btnMenu.setAttribute('arial-label', 'Abrir Menu')
    }
}

btnMenu.addEventListener('click', handleButtonClick)
btnMenu.addEventListener('touchstart', handleButtonClick)
```
___

[Tiger Codes](https://www.youtube.com/watch?v=5iGoLFkIVl4&list=PLn-1oXF21q6IwN9F3qZF9-2yEpkAtjU9w&index=2)
