window.onload = () => {
    const welcomeButton = document.querySelector('#createAccountButton')
    const dataButton = document.querySelector('#createAccountNext')
    const inputs = document.querySelectorAll('input')

    const pageComponent = document.querySelector('.auth')

    welcomeButton.addEventListener('click', () => {
        pageComponent.classList.remove('is-welcome')
        pageComponent.classList.add('is-data')
    })
    dataButton.addEventListener('click', () => {
        pageComponent.classList.remove('is-data')
    })
    inputs.forEach(item => {
        item.addEventListener('focus', () => {
            document.querySelectorAll('.bottom').forEach(element => {
                element.style.marginBottom = '100%'
            })
        })
        item.addEventListener('blur', () => {
            document.querySelectorAll('.bottom').forEach(element => {
                element.style.marginBottom = '0'
            })
        })
    })   
}