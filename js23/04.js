class HelloWorld extends HTMLElement {

    connectedCallback() {
      this.innerHTML = `<h1>Hello world</h1>`;
    }
}


// register our custom element on the CustomElementRegistry using the define() method...
    // it seems CustomElementRegistry is a thing
customElements.define('hello-world', HelloWorld);

/*
    connectedCallback
    - invoked each time the custom element is appended into a document-connected element
    
    attributeChangedCallback
    - invoked when one of the custom element's attributes is added, removed, changed

*/