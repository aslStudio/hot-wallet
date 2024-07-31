window.addEventListener('load', () => {
    const button = document.querySelector('#filtersButton')
    const root = document.querySelector('.filter-button')

    button.addEventListener('click', () => {
        root.classList.toggle('is-active')
    })
    document.querySelectorAll('.filter-button__item').forEach(item => {
        item.addEventListener('click', () => {
            root.classList.toggle('is-active')
        })
    })
})