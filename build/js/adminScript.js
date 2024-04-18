const addModal = document.querySelector('#addFood')
const editModal = document.querySelector('#editFood')
const openModal = document.querySelectorAll('.open-modal')
const closeModal = document.querySelectorAll('.close-modal')

openModal.forEach(btns => {
btns.addEventListener('click', () => {
	if(btns.getAttribute('aria-controls') === 'edit-food'){
		editModal.showModal()
	}
	else if(btns.getAttribute('aria-controls') === 'add-food'){
		addModal.showModal()
	}
})
})
closeModal.forEach(btns => {
	btns.addEventListener('click', () => {
		if(btns.getAttribute('aria-controls') === 'edit-food'){
			editModal.close()
		}
		else if(btns.getAttribute('aria-controls') === 'add-food'){
			addModal.close()
		}
	})
})

