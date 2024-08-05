function enablePage() {
    const main = document.querySelector('main')
    const header = document.querySelector('header')
    const footer = document.querySelector('footer')

    main.classList.remove('not-clickable')
    header.classList.remove('not-clickable')
    footer.classList.remove('not-clickable')
}

window.addEventListener('load', () => {
    document.querySelectorAll('.modal__close').forEach(item => {
        item.addEventListener('click', () => {
            document.querySelectorAll('.modal').forEach(item => {
                item.classList.remove('is-active')
            })
            enablePage()
        })
    })
})