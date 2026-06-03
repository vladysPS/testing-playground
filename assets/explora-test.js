class ExploraFerozLand extends HTMLElement {
    constructor(){
        super();
    }

    connectedCallback(){
        console.log("element constructed", this)
    }
}

customElements.define("explora-feroz-land", ExploraFerozLand);
