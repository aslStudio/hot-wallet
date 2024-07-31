window.addEventListener('load', () => {
    const notificationsButton = document.querySelector('.header__notifications')

    notificationsButton.addEventListener('click', () => {
        document.querySelector('.notifications-modal').classList.add('is-active')
    })
})