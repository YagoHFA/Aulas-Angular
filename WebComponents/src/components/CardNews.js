class CardNews extends HTMLElement{
    constructor(){
        super();

        const shadow = this.attachShadow({mode : "open"});
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());
    }

    build(){
        const componetRoot = document.createElement("div");
        componetRoot.setAttribute("class", "card");

        const cardLeft = document.createElement("div");
        cardLeft.setAttribute("class", "Left");

        const autor = document.createElement("span");
        autor.textContent = "By " + (this.getAttribute("autor") || "Anonymous")

        const link =  document.createElement("a");
        link.textContent = this.getAttribute("title");
        link.href = this.getAttribute("URL")

        const contet = document.createElement("p");
        contet.textContent = this.getAttribute("Content")

        cardLeft.appendChild(autor);
        cardLeft.appendChild(link);
        cardLeft.appendChild(contet);


        const cardRight = document.createElement("div");
        cardRight.setAttribute("class", "Right");

        const NewsImage = document.createElement("img");
        NewsImage.src = this.getAttribute("imagem") || "assets/default.png";


        cardRight.appendChild(NewsImage);


        componetRoot.appendChild(cardLeft);
        componetRoot.appendChild(cardRight);
        return componetRoot;
    }

    styles(){
        const style = document.createElement("style");

        style.textContent = `
        .card{
            width: 850px;
            display: flex;
            flex-direction: row;
            box-shadow: 9px 9px 27px 0px rgb(27, 27, 27);
            -webkit-box-shadow: 10px 8px 27px 0px rgb(27, 27, 27);
            -moz-box-shadow: 10px 8px 27px 0px rgb(27, 27, 27);
            justify-content: space-between;
        }
        
        .Left{
          
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding-left: 10px;
        }
        
        .Left > span{
            font-weight: 400;
        }
        
        .Left > p{
        
        color: rgb(27, 27, 27);
        }
        
        .Left > a{
            margin-top: 15px;
            font-size: 25px;
            color: black;
            text-decoration: none;
            font-weight: bold;
        }
        `
        

        return style
        }
        
    }




customElements.define("card-news", CardNews);