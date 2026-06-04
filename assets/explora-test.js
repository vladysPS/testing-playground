// @ts-nocheck
class ExploraFerozLand extends HTMLElement {
    constructor() {
        super();
        this.cardsArray = [];
        this.buttonsArray = [];
    }

    _handleButtonClick(e) {
        const idButton = e.currentTarget.dataset.idButton;
        this.cardsArray.forEach(card => {
            card.classList.toggle("hidden", card.dataset.idCard !== idButton);
        });
        this.buttonsArray.forEach(btn => {
            btn.classList.toggle("selected", btn.dataset.idButton === idButton);
        });
    }

    connectedCallback() {
        this.cardsArray = this.querySelectorAll(".p-refugio-card");
        this.buttonsArray = this.querySelectorAll(".p-image-selector");

        this.buttonsArray.forEach(button => {
            button.addEventListener("click", this._handleButtonClick.bind(this));
        });
    }

    disconnectedCallback() {
        this.buttonsArray.forEach(button => {
            button.removeEventListener("click", this._handleButtonClick.bind(this));
        });
    }
}

customElements.define("explora-feroz-land", ExploraFerozLand);