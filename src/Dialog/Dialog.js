import './Dialog.css';
import T from '@scanex/translations';
import Component from '../Component.js';

T.addText ('rus', {    
    close: 'Закрыть',   
});

T.addText ('eng', {
    close: 'Close',
});

class Dialog extends Component {
    constructor(title, id) {
        super(document.body);
        if (id) {
            this._element.setAttribute('id', id);
        }
        this._titleElement.innerText = title;
        this._moving = false;
        this._offsetX;
        this._offsetY;
        this._header.addEventListener('mousedown', this._start.bind(this));
        this._element.addEventListener('mousemove', this._move.bind(this));
        window.addEventListener('mouseup', this._stop.bind(this));
    }    
    get header () {
        return this._header;
    }
    get content () {
        return this._content;
    }
    get footer () {
        return this._footer;
    }    
    _start (e) {
        e.stopPropagation();
        const {clientX, clientY} = e;
        const {top, left} = this._element.getBoundingClientRect();
        this._offsetX = clientX - left;
        this._offsetY = clientY - top;
        this._moving = true;
    }
    _stop () {
        this._moving = false;
    }
    _move (e) {
        if (this._moving) {
            e.stopPropagation();
            const {clientX, clientY} = e;
            this._element.style.left = `${clientX - this._offsetX}px`;
            this._element.style.top = `${clientY - this._offsetY}px`;
        }
    }
    _render(element) {
        element.classList.add('scanex-component-dialog');

        this._header = document.createElement('div');
        this._header.classList.add('header');

        this._titleElement = document.createElement('label');        
        this._header.appendChild(this._titleElement);

        let button = document.createElement('i');
        button.setAttribute('title', T.getText('close'));
        button.classList.add('icon');
        button.classList.add('close');
        button.addEventListener('click', e => {
            e.stopPropagation();
            let event = document.createEvent('Event');
            event.initEvent('close', false, false);
            this.dispatchEvent(event);
        });
        this._header.appendChild(button);

        element.appendChild(this._header);

        this._content = document.createElement('div');
        this._content.classList.add('content');
        element.appendChild(this._content);

        this._footer = document.createElement('div');
        this._footer.classList.add('footer');
        element.appendChild(this._footer);
    }
}

export default Dialog;