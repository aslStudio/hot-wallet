window.addEventListener('load', () => {
    const welcomeButton = document.querySelector('#createAccountButton')
    const dataButton = document.querySelector('#createAccountNext')
    const receiverButton = document.querySelector('#createReceiverNext')
    const loginButton = document.querySelector('#login')
    const inputs = document.querySelectorAll('input')
    const textarea = document.querySelectorAll('textarea')

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
        const timeout = setTimeout(() => {
            document.body.classList.remove('is-auth')
                document.body.classList.add('is-main')
                document.querySelector('header').classList.remove('is-hidden')
                document.querySelector('footer').classList.remove('is-hidden')
        }, 2000)
    })
    loginButton.addEventListener('click', () => {
        document.body.classList.remove('is-auth')
                document.body.classList.add('is-main')
                document.querySelector('header').classList.remove('is-hidden')
                document.querySelector('footer').classList.remove('is-hidden')
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
    textarea.forEach(item => {
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
})