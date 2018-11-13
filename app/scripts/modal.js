/* jshint esversion: 6 */


class Modal {
	constructor() {
		this.contactLink = document.getElementById('contact-link');
		this.modal = document.getElementsByClassName('modal')[0];
		this.modalX = document.getElementsByClassName('modal__x')[0];
		this.events();
	}

	events() {
		this.contactLink.addEventListener('click', this.openModal.bind(this));
		this.modalX.addEventListener('click', this.closeModal.bind(this));
		document.addEventListener('keyup', this.keyPressHandler.bind(this));
	}

	keyPressHandler(e) {
		// activates closeModal() when user presses Esc key
		if(e.keyCode == 27) {
			this.closeModal();
		}
	}

	openModal() {
		event.preventDefault();
		this.modal.classList.add('modal--is-visible');
		return false;
	}

	closeModal() {
		this.modal.classList.remove('modal--is-visible');
		return false;
	}
}


export default Modal;