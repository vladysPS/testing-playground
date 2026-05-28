class PaginationComponent extends HTMLElement {
    constructor(){
        super();
    }
    connectedCallback(){
        console.log("everything is loaded");
        this.links= this.querySelectorAll("a");
        this.links.forEach((link)=>{
            link.addEventListener("click", this.handlePaginationButton.bind(this))
        })
    }
    handlePaginationButton(event){
        event.preventDefault();
        console.log("default prevented")
    }
}

customElements.define("pagination-component", PaginationComponent);