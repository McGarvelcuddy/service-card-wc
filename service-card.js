import { LitElement, html, css } from "lit-element";


class ServiceCard extends LitElement {
    static get properties() {
        return {
            image: { type: String },
            title: { type: String },
            info: { type: String },
            uniformPadding: { type: String }
        };
    }

    constructor() {
        super();
        this.image = "img_avatar.png";
        this.title = "A shorter title";
        this.info = "Here is the information about the thing";
        this.uniformPadding = "2";
    }

    static get styles() {
        return css `
        :root{
        }
        .card {
            box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
            transition: 0.3s;
            width: 25%;
        }
        .card:hover {
            box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
        }
        .container {
            padding: 2px 2px 2px 2px;
        }
        .Avatar {
            border-radius: 50%;
            width: 95%;
            padding: 2.5% 2.5% 2.5% 2.5%;
        }
        .title {
            padding: 4px 4px 4px 4px;
            text-align: center;
            font-family: "Courier New", courier, sans-serif;
        }
        .info {
            padding: 4px 4px 4px 4px;
        }
        `;
    }


    render() {
        return html `
            <div class="card">
                <div class="container">
                    <img class="Avatar" src="${this.image}" alt="Avatar"></img>
                    <h3 class="title"><b>${this.title}</b></h3>
                    <p class="info">${this.info}</p>
                </div>
            </div>
        `;
    }
}



window.customElements.define('service-card', ServiceCard);