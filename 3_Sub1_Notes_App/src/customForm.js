class customForm extends HTMLElement {
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

        .form-title {
            width: 100%;
        }

        .form-body {
            width : 100%;
            height: 100%;
        }

        .btn {
            background-color: dodgerblue;
            border-style: none;
            border-radius: 4px;
            padding: 10px 20px;
            color: white;
            margin-top: 20px;
        }

        .form-label {
            font-size: 22px;
        }

        .formm {
            margin-top: 20px
        }
      `;
    }
  
    render() {
      this.updateStyle();

      const template = `
        ${this._style.outerHTML}
            <div class="mb-3 formm">
                <label for="form-title" class="form-label">Judul</label> <br>
                <input type="text" class="form-title" id="form-title">
            </div>
            <div class="mb-3 formm">
                <label for="form-body" class="form-label">Isi</label> <br>
                <textarea class="form-body" id="form-body" rows="3"></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Add Note</button>
      `;
  
      this._shadowRoot.innerHTML = template;
    }
  }
  
  customElements.define('custom-form', customForm);