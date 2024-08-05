window.addEventListener('load', () => {
    const accountCell = document.querySelector('#userCard')
    const creditianalsCell = document.querySelector('#seedCard')
    const languagesCell = document.querySelector('#languageCard')
    const importCell = document.querySelector('#importCard')
    const logoutCell = document.querySelector('#logoutCard')

    accountCell.addEventListener('click', () => {
        document.querySelector('#modalSelectAccount').classList.add('is-active')
    })
    creditianalsCell.addEventListener('click', () => {
        document.querySelector('#creditianalsModal').classList.add('is-active')
    })
    languagesCell.addEventListener('click', () => {
        document.querySelector('#languagesModal').classList.add('is-active')
    })
    importCell.addEventListener('click', () => {
        document.querySelector('#modalImportAccount').classList.add('is-active')
    })
    logoutCell.addEventListener('click', () => {
        document.querySelector('#modalLogout').classList.add('is-active')
    })
})