 class MyCustomButton extends HTMLElement {
    private searchData: string[];
    constructor() {
        super();
        this.searchData = globalThis.server.searchData;
        const shadowRoot = this.attachShadow({ mode: 'open' });
        const button = document.createElement('button');
        button.textContent = 'Click Me';
  
      const style = document.createElement('style');
      style.textContent = `
        button {
          background-color: #007bff;
          color: white;
          border: none;
          padding: 10px 20px;
          cursor: pointer;
        }
      `;
  
      shadowRoot.appendChild(style);
      shadowRoot.appendChild(button);
    }

  }
  
  
  const createTemplate = (name: string): void =>{
      customElements.define(name, MyCustomButton);
  }

  export default createTemplate

  
  