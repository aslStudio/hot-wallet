window.addEventListener('load', () => {
    const home = document.querySelector('#homeButton')
    const farming = document.querySelector('#farmingButton')
    const tasks = document.querySelector('#tasksButton')

    home.addEventListener('click', () => {
        document.body.className = ''
        document.body.classList.add('is-main')
    })
    farming.addEventListener('click', () => {
        document.body.className = ''
        document.body.classList.add('is-farming')
    })
    tasks.addEventListener('click', () => {
        document.body.className = ''
        document.body.classList.add('is-tasks')
    })
})