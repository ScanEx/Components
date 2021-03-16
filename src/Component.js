import './Component.css';
import Evented from '@scanex/evented';

class Component extends Evented {
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
    get element() {
        return this._element;
    }
    _render(element, options) {
    }
}

export default Component;