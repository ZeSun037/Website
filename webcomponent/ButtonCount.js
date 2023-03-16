class ButtonCount extends HTMLElement {

    constructor() {
        super();

        let count = 0;

        this.attachShadow({mode : 'open'});

        const button = document.createElement('button');

        button.innerHTML = `Times Clicked: ${count}`;

        button.onclick = () => {
            count++;
            button.innerHTML = `Times Clicked: ${count}`;
        }

        this.shadowRoot.appendChild(button);
    }
}

customElements.define("button-count", ButtonCount);