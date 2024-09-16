class customCard extends HTMLElement {
  constructor() {
    super();

    this._shadowRoot = this.attachShadow({ mode: "open" });
    this._style = document.createElement("style");
  }

  connectedCallback() {
    this.render();
  }

  updateStyle() {
    this._style.textContent = `
        .card {
          background-color: ;
          padding: 10px 20px;
          border-style: solid;
          border-radius: 20px;
          height: 100%;
        }

        .deleteButton {
          background-color: red;
          border-style: none;
          border-radius: 4px;
          padding: 10px 20px;
          color: white;
          margin-top: 20px;
        }

        .deleteButton:hover {
          background-color: #8B0A1A;
        }
      `;
  }

  setData(noteData) {
    this.noteData = noteData;

    this.render();
  }

  getDeleteButton() {
    return this.shadowRoot.querySelector(".deleteButton");
  }

  render() {
    this.updateStyle();

    const template = `
        ${this._style.outerHTML}
          <div class="card">
              <h5 class="card-header"> ${this.noteData.title} </h5>
              <div class="card-body">
                  <p class="card-text"> ${this.noteData.body} </p>
              </div>
              <button type="button" class="deleteButton" id="${this.noteData.id}">Delete Note</button> 
          </div>
      `;

    this._shadowRoot.innerHTML = template;
  }
}

customElements.define("custom-card", customCard);
