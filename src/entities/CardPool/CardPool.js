function disablePage() {
    const main = document.querySelector('main')
    const header = document.querySelector('header')
    const footer = document.querySelector('footer')

    main.classList.add('not-clickable')
    header.classList.add('not-clickable')
    footer.classList.add('not-clickable')
}

window.addEventListener('load', () => {
    const claimButtons = document.querySelectorAll('#claimButton')
    const stakeButton = document.querySelectorAll('#stakeButton')

    claimButtons.forEach(item => {
        item.addEventListener('click', () => {
            document.querySelector('.farming-modal').classList.add('is-active')
            disablePage()
        })
    })
    stakeButton.forEach(item => {
        item.addEventListener('click', () => {
            document.querySelector('.farming-modal').classList.add('is-active')
            disablePage()
        })
    })
})