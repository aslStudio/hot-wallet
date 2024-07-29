window.onload = () => {
    const welcomeButton = document.querySelector('#createAccountButton')
    const dataButton = document.querySelector('#createAccountNext')
    const inputs = document.querySelectorAll('.data__value')

    const pageComponent = document.querySelector('.auth')

    welcomeButton.addEventListener('click', () => {
        pageComponent.classList.remove('is-welcome')
        pageComponent.classList.add('is-data')
    })
    dataButton.addEventListener('click', () => {
        pageComponent.classList.remove('is-data')
    })
    // inputs.forEach(item => {
    //     item.addEventListener('focuc', () => {
    //         document.body.style.transform = `translateY(-40px)`
    //     })
    // })
}