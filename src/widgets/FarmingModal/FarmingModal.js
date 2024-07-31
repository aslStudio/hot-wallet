function enablePage() {
    const main = document.querySelector('main')
    const header = document.querySelector('header')
    const footer = document.querySelector('footer')

    main.classList.remove('not-clickable')
    header.classList.remove('not-clickable')
    footer.classList.remove('not-clickable')
}

window.addEventListener('load', () => {
    const buttonSend = document.querySelector('#sendFarmingButton')
    const notYetButton = document.querySelector('#notYetButton')
    const root = document.querySelector('.farming-modal')

    buttonSend.addEventListener('click', () => {
        root.classList.remove('is-active')
        enablePage()
    })
    notYetButton.addEventListener('click', () => {
        root.classList.remove('is-active')
        enablePage()
    })
})