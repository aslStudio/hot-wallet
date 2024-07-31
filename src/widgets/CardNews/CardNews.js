window.addEventListener("load", () => {
    const button = document.querySelector('#closeButton')
    const root = document.querySelector('.card-news')

    button.addEventListener('click', () => {
       root.classList.add('is-hidden')
    })
})