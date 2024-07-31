window.addEventListener("load", () => {
    const button = document.querySelector('#showButton')
    const value = document.querySelector('.card-balance__value')

    button.addEventListener('click', () => {
        console.log('clickx')
        button.classList.toggle('is-open')
        button.classList.toggle('is-close')

        if (button.classList.contains('is-open')) {
            value.innerHTML = '$0'
        } else {
            value.innerHTML = '****'
        }
    })
})