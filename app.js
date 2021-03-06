const btn = document.getElementById('open-modal')
const modal = document.getElementById('modal')
const btnClose = document.querySelector('.modal__close')

btn.onclick = () => {
    modal.classList.add('modal_active')

    btnClose.addEventListener('click', closeModal)

    modal.addEventListener('click', hideModal)

    function closeModal() {
        modal.classList.remove('modal_active')
        btnClose.removeEventListener('click', closeModal)
        modal.removeEventListener('click', hideModal)
    }

    function hideModal(event) {
        if (event.target === modal) {
            closeModal()
        }
    }
}