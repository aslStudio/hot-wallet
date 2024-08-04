window.addEventListener('load', () => {
    const button = document.querySelector('#filtersButton')
    const modal = document.querySelector('#filterModal')

    button.addEventListener('click', () => {
        modal.classList.add('is-active')
    })
})