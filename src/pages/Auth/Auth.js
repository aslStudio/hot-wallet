window.onload = () => {
    const welcomeButton = document.querySelector('#createAccountButton')
    const dataButton = document.querySelector('#createAccountNext')

    const pageComponent = document.querySelector('.auth')

    welcomeButton.addEventListener('click', () => {
        pageComponent.classList.remove('is-welcome')
        pageComponent.classList.add('is-data')
    })
    dataButton.addEventListener('click', () => {
        pageComponent.classList.remove('is-data')
    })
}