import './Component.css';
import EventTarget from '@scanex/event-target/index.js';

class Component extends EventTarget {
    constructor(container, options) {
        super();        
        this._element = document.createElement('div');
        this._element.classList.add('scanex-component');
        container.appendChild(this._element);
        this._render(this._element, options);
    }
    destroy () {
        this._element.remove();
    }
    forwardEvent(e) {
        e.stopPropagation();
        let event = document.createEvent('Event');
        event.initEvent(e.type, false, false);
        event.detail = e.detail;
        this.dispatchEvent(event);
    }
    _render(element, options) {
    }
}

export default Component;