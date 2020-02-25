import { LitElement, html, css } from 'lit-element/lit-element.js';

class ServiceCard extends LitElement {
  static get tag() {
    return 'service-card';
  }

  static get properties() {
    return {
      image: { type: String },
      title: { type: String },
      info: { type: String },
      alt: { type: String },
      uniformPadding: { type: String, attribute: 'uniform-padding' },
    };
  }

  constructor() {
    super();
    this.title = 'A shorter title';
    this.info = 'Here is the information about the thing';
    this.uniformPadding = '2';
  }

  static get styles() {
    return css`
      :host {
        display: inline-flex;
      }
      .card {
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        transition: 0.3s all ease-in-out;
        width: var(--service-card-card-width, 300px);
      }
      .card:hover {
        box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
      }
      .container {
        padding: 2px 2px 2px 2px;
      }
      .avatar {
        border-radius: 50%;
        width: 95%;
        padding: 2.5% 2.5% 2.5% 2.5%;
      }
      .title {
        padding: 4px 4px 4px 4px;
        text-align: center;
        font-family: 'Courier New', courier, sans-serif;
      }
      .info {
        padding: 4px 4px 4px 4px;
      }
    `;
  }

  render() {
    return html`
      <div class="card">
        <div class="container">
          <img loading="lazy" class="avatar" src="${this.image}" alt="${this.alt}" />
          <h3 class="title"><b>${this.title}</b></h3>
          <p class="info">${this.info}</p>
        </div>
      </div>
    `;
  }
}

export { ServiceCard };
window.customElements.define(ServiceCard.tag, ServiceCard);
