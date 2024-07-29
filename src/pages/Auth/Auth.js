window.onload = () => {
    const welcomeButton = document.querySelector('#createAccountButton')
    const dataButton = document.querySelector('#createAccountNext')
    const receiverButton = document.querySelector('#createReceiverNext')
    const inputs = document.querySelectorAll('input')
    const percent = document.querySelector('#percentValue')

    const pageComponent = document.querySelector('.auth')

    welcomeButton.addEventListener('click', () => {
        pageComponent.classList.remove('is-welcome')
        pageComponent.classList.add('is-data')
    })
    dataButton.addEventListener('click', () => {
        pageComponent.classList.remove('is-data')
        pageComponent.classList.add('is-receiver')
    })
    receiverButton.addEventListener('click', () => {
        pageComponent.classList.remove('is-receiver')
        pageComponent.classList.add('is-loading')
        const interval = setInterval(() => {
            percent.innerHTML = Number(percent.innerHTML) + 1
            if (Number(percent.innerHTML) === 100) {
                clearInterval(interval)
            }
        }, 100)
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