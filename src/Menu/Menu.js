import './Menu.css';
import Group from './Group.js';
import Component from '../Component.js';

class Menu extends Component {
    constructor(container, {id, title}) {
        super(container);        
        this._group = new Group(this._root, {id, title});
        this._group.on('item:click', e => {
            this._group.expanded = false;
            let event = document.createEvent('Event');
            event.initEvent('item:click', false, false);
            event.detail = e.detail;
            this.dispatchEvent(event);
        });
        window.addEventListener('click', () => this._group.expanded = false);
    }    
    get items () {
        return this._group.items;
    }
    set items (items) {
        this._group.items = items;
    }
    _render(element) {
        element.classList.add('scanex-component-menu');
        element.classList.add('noselect');
        this._root = document.createElement('div');
        this._root.classList.add('scanex-menu-root');
        element.appendChild(this._root);
    }
}

export default Menu;