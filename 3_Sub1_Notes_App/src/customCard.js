class customCard extends HTMLElement {
    constructor() {
      super();
  
      this._shadowRoot = this.attachShadow({ mode: 'open' });
      this._style = document.createElement('style');
    }
  
    connectedCallback() {
      this.render();
    }
  
    updateStyle() {
      this._style.textContent = `
        .card {
          background-color: ;
          padding: 20px;
          border-style: solid;
          border-radius: 20px;
          height: 100%;
        }
      `;
    }

    setData(noteData) {
      this.noteData = noteData

      this.render()
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
          </div>
      `;
  
      this._shadowRoot.innerHTML = template;
    }
  }
  
  customElements.define('custom-card', customCard);
  