window.addEventListener('load', () => {
    document.querySelectorAll('.modal__close').forEach(item => {
        item.addEventListener('click', () => {
            document.querySelectorAll('.modal').forEach(item => {
                item.classList.remove('is-active')
            })
        })
    })
})