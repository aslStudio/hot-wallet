window.addEventListener('load', () => {
    const root = document.querySelector('.card-invite')
    const button = document.querySelector('#copyLinkButton')

    button.addEventListener('click', () => {
        const copyText = root.querySelector('input')

        copyText.select();
        copyText.setSelectionRange(0, 99999);

        navigator.clipboard.writeText(copyText.value);
    })
})