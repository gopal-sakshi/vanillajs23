class PopUpInfo extends HTMLElement {

    constructor() { super(); }

    style23 = `
        .wrapper {
            position: relative;
        }

        .info {
            font-size: 0.8rem;
            width: 200px;
            display: inline-block;
            border: 1px solid black;
            padding: 10px;
            background: white;
            border-radius: 10px;
            opacity: 0;
            transition: 0.6s all;
            position: absolute;
            bottom: 20px;
            left: 10px;
            z-index: 3;   
        }
        
        img {
            width: 100px;
        }
        
        .icon:hover + .info, .icon:focus + .info {
            opacity: 1;
        }
    `

    connectedCallback() {
        const shadow = this.attachShadow({ mode: "open" }); // sets and returns 'this.shadowRoot';
        
        
        // wrapper thingy
        const wrapper = document.createElement("span");
        wrapper.setAttribute("class", "wrapper");

        // icon thingy
        const icon = wrapper.appendChild(document.createElement("span"));
        icon.setAttribute("class", "icon");
        icon.setAttribute("tabindex", 0);


        // img within icon
        const img = icon.appendChild(document.createElement("img"));
        img.src = this.hasAttribute("img") ? this.getAttribute("img") : "resources/elephant_tusk.png";        
        img.alt = this.hasAttribute("alt") ? this.getAttribute("alt") : "";
        
        // info thingy
        const info = wrapper.appendChild(document.createElement("span"));
        info.setAttribute("class", "info");        
        info.textContent = this.getAttribute("data-text23");
        
        // style thingy
        const style = document.createElement("style");
        style.textContent = this.style23;
        
        // attach the created elements to the shadow DOM
        shadow.appendChild(style);
        shadow.appendChild(wrapper);
        wrapper.appendChild(icon);
        wrapper.appendChild(info);
    }



}

customElements.define("popup-info23", PopUpInfo);