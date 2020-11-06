import './Dialog.css';
import T from '@scanex/translations';
import Component from '../Component.js';

T.addText ('rus', { 
    scanex: {
        components: {
            dialog: {
                close: 'Закрыть',
                maximize: 'Развернуть',
                minimize: 'Свернуть',
            }
        }
    }   
    
});

T.addText ('eng', {
    scanex: {
        components: {
            dialog: {
                close: 'Close',
                maximize: 'Maximize',
                minimize: 'Minimize',
            }
        }
    }    
});

const translate = T.getText.bind(T);

export default class Dialog extends Component {
    constructor({title, id, collapsible = false, top, left}) {
        super(document.body, {id, collapsible, top, left});        
        if (this._id) {
            this._element.setAttribute('id', this._id);
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
        if (this._moving) {
            this._moving = false;
            this._savePosition();
        }        
    }
    _move (e) {
        if (this._moving) {
            e.stopPropagation();
            const {clientX, clientY} = e;
            this._element.style.left = `${clientX - this._offsetX}px`;
            this._element.style.top = `${clientY - this._offsetY}px`;            
        }
    }
    _toggle(e) {
        e.stopPropagation();
        if (this._btnToggle.classList.contains('minimize')) {
            this._btnToggle.setAttribute('title', translate('scanex.components.dialog.maximize'));
            this._btnToggle.classList.remove('minimize');
            this._btnToggle.classList.add('maximize');
            this._content.classList.add('hidden');
            this._footer.classList.add('hidden');
            let event = document.createEvent('Event');
            event.initEvent('minimize', false, false);
            this.dispatchEvent(event);
        }
        else {
            this._btnToggle.setAttribute('title', translate('scanex.components.dialog.minimize'));
            this._btnToggle.classList.remove('maximize');
            this._btnToggle.classList.add('minimize');            
            this._content.classList.remove('hidden');
            this._footer.classList.remove('hidden');
            let event = document.createEvent('Event');
            event.initEvent('maximize', false, false);
            this.dispatchEvent(event);
        }
        
    }
    _close(e) {
        e.stopPropagation();
        let event = document.createEvent('Event');
        event.initEvent('close', false, false);
        this.dispatchEvent(event);
    }
    _render(element, {id, collapsible, top, left}) {
        element.classList.add('scanex-component-dialog');        
        this._id = id;

        this._restorePosition(top, left);

        this._header = document.createElement('div');
        this._header.classList.add('header');

        this._titleElement = document.createElement('label');        
        this._header.appendChild(this._titleElement);

        let buttons = document.createElement('div');
        buttons.classList.add('header-buttons');

        if (collapsible) {
            this._btnToggle = document.createElement('i');
            this._btnToggle.setAttribute('title', translate('scanex.components.dialog.minimize'));
            this._btnToggle.classList.add('scanex-component-icon');
            this._btnToggle.classList.add('minimize');
            this._btnToggle.addEventListener('click', this._toggle.bind(this));
            buttons.appendChild(this._btnToggle);
        }

        let btnClose = document.createElement('i');
        btnClose.setAttribute('title', translate('scanex.components.dialog.close'));
        btnClose.classList.add('scanex-component-icon');
        btnClose.classList.add('close');
        btnClose.addEventListener('click', this._close.bind(this));
        buttons.appendChild(btnClose);

        this._header.appendChild(buttons);

        element.appendChild(this._header);

        this._content = document.createElement('div');
        this._content.classList.add('content');
        element.appendChild(this._content);

        this._footer = document.createElement('div');
        this._footer.classList.add('footer');
        element.appendChild(this._footer);
    }
    _restorePosition(top, left) {
        if (typeof this._id === 'string' && this._id != '') {
            const [x, y] = window.localStorage.getItem(this._id).split(',');
            this._element.style.top = `${y || top || Math.round (window.innerHeight / 2)}px`;
            this._element.style.left = `${x || left || Math.round (window.innerWidth / 2)}px`;
        }
        else {
            this._element.style.top = `${top || Math.round (window.innerHeight / 2)}px`;
            this._element.style.left = `${left || Math.round (window.innerWidth / 2)}px`;
        }
    }
    _savePosition() {
        if (typeof this._id === 'string' && this._id != '') {            
            const {top, left} = this._element.getBoundingClientRect();
            window.localStorage.setItem(this._id, [left, top].join(','));
        }
    }
};