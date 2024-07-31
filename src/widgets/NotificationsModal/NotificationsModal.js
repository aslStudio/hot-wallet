window.addEventListener('load', () => {
    const allowButton = document.querySelector('#allowButton')
    const laterButton = document.querySelector('#laterButton')
    const root = document.querySelector('.notifications-modal')

    allowButton.addEventListener('click', () => {
        root.classList.remove('is-active')
    })
    laterButton.addEventListener('click', () => {
        root.classList.remove('is-active')
    })
})