function enablePage() {
    const main = document.querySelector('main')
    const header = document.querySelector('header')
    const footer = document.querySelector('footer')

    main.classList.remove('not-clickable')
    header.classList.remove('not-clickable')
    footer.classList.remove('not-clickable')
}

window.addEventListener('load', () => {
    const allowButton = document.querySelector('#allowButton')
    const laterButton = document.querySelector('#laterButton')
    const root = document.querySelector('#notificationsModal')

    allowButton.addEventListener('click', () => {
        root.classList.remove('is-active')
        enablePage()
    })
    laterButton.addEventListener('click', () => {
        root.classList.remove('is-active')
        enablePage()
    })
})