class TituloDinamico extends HTMLElement{
    constructor(){
        super();

        const shadow = this.attachShadow({mode: "open"});

        //Base do componente
        const componetRoot = document.createElement('h1');
        componetRoot.textContent = this.getAttribute("titulo");

        //Estilizar componente
        const style = document.createElement("style");
        style.textContent = `
        h1{
            color: red;
        }
        `

        //enviar shadow
        shadow.appendChild(componetRoot);
        shadow.appendChild(style);

    }
}

customElements.define("titulo-dinamico", TituloDinamico)