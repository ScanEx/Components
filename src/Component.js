import './Component.css';
import EventTarget from 'scanex-event-target/index.js';

class Component extends EventTarget {
    constructor(container) {
        super();
        this._container = container;
        this._element = document.createElement('div');     
        this._element.classList.add('scanex-component');
        this._container.appendChild(this._element);
        this._render(this._element);
    }
    destroy () {
        this._container.removeChild(this._element);
    }
    forwardEvent(e) {
        e.stopPropagation();
        let event = document.createEvent('Event');
        event.initEvent(e.type, false, false);
        event.detail = e.detail;
        this.dispatchEvent(event);
    }
    _render(element) {
    }
}

export default Component;