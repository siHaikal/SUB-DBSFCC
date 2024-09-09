class customNav extends HTMLElement {
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
        .navbar-brand {
          font-weight: 600;
          margin-left: 30%;
          width: 100%;
          display: block;
          font-size: 30px;
        }
      `;
    }
  
    render() {
      this.updateStyle();

      const template = `
        ${this._style.outerHTML}
          <div>
            <span class="navbar-brand">Note App</span>
          </div>
      `;
  
      this._shadowRoot.innerHTML = template;
    }
  }
  
  customElements.define('custom-nav', customNav);