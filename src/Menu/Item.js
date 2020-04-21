import Component from '../Component';

class Item extends Component {
    constructor(container, {id, title}) {
        super(container);        
        this._id = id;
        this._title.innerText = title;
        this._element.addEventListener('click', this._onClick.bind(this));
    }
    _onClick (e) {
        e.stopPropagation();
        let event = document.createEvent('Event');
        event.initEvent('item:click', false, false);
        event.detail = this.path;
        this.dispatchEvent(event);
    }
    get id () {
        return this._id;
    }
    get path () {
        return this.parent ? `${this.parent.path}.${this.id}` : this.id;
    }
    get parent () {
        return this._parent;
    }
    set parent (parent) {
        this._parent = parent;
    }
    clear() {
        this._element.removeEventListener('click', this._onClick);        
    }
    _render (element) {        
        element.classList.add('scanex-menu-item');        
        this._title = document.createElement('label');
        this._title.classList.add('scanex-menu-item-title');
        element.appendChild(this._title);        
    }
}

export default Item;