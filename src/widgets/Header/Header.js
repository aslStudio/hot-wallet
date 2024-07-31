function disablePage() {
    const main = document.querySelector('main')
    const header = document.querySelector('header')
    const footer = document.querySelector('footer')

    main.classList.add('not-clickable')
    header.classList.add('not-clickable')
    footer.classList.add('not-clickable')
}

window.addEventListener('load', () => {
    const notificationsButton = document.querySelector('.header__notifications')

    notificationsButton.addEventListener('click', () => {
        document.querySelector('.notifications-modal').classList.add('is-active')
        disablePage()
    })
})