class AppDrawer extends HTMLElement {

    get open() { return this.hasAttribute('open'); }

    set open(val) {
        if (val) { this.setAttribute('open', ''); }
        else { this.removeAttribute('open'); }
        this.toggleDrawer();
    }
    
    get disabled() {  return this.hasAttribute('disabled'); }

    set disabled(val) {        
        if (val) { this.setAttribute('disabled', ''); } 
        else { this.removeAttribute('disabled'); }
    }

    
    constructor() {
    
        super();
    
        this.addEventListener('click', e => {            
            if (this.disabled) { return; }              // dont toggle the drawer if its disabled
            this.toggleDrawer();
        });
    }

    toggleDrawer() {
        console.log('drawer toggled');
    }
}

customElements.define('app-drawer', AppDrawer);