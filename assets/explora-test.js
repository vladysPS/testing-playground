// @ts-nocheck
class ExploraFerozLand extends HTMLElement {
    constructor(){
        super();
        this.cardsArray = [];
        this.buttonsArray = [];
    }

    connectedCallback(){
        console.log("element constructed", this)
        this.cardsArray = this.querySelectorAll(".p-refugio-card");
        this.buttonsArray = this.querySelectorAll(".p-image-selector");
        console.log("cards", this.cardsArray);
        console.log("buttons", this.buttonsArray);
        this.buttonsArray.forEach(button => {
            button.addEventListener("click", (e) => {
                const idButton = e.currentTarget.dataset.idButton;
                this.cardsArray.forEach(card => {
                    const idCard = card.dataset.idCard;
                    if(idCard === idButton){
                        card.classList.remove("hidden");
                    } else {
                        card.classList.add("hidden");
                    }
                })
                this.buttonsArray.forEach(btn => {
                    const idBtn = btn.dataset.idButton;
                    if(idBtn === idButton){
                        btn.classList.add("selected");
                    } else {
                        btn.classList.remove("selected");
                    }
                })
            })
        })
    }
    disconnectedCallback(){
        console.log("element destroyed")
    }
}

customElements.define("explora-feroz-land", ExploraFerozLand);
