import EventTarget from 'scanex-event-target/index.js';

class Component extends EventTarget {
    constructor(container) {
        super();
        this._container = container;
        this._element = document.createElement('div');
        this._container.appendChild(this._element);
        this._render(this._element);
    }
    destroy () {
        this._container.removeChild(this._element);
    }
    _render(element) {
    }
}

export default Component;