import './Menu.css';
import Group from './Group.js';
import Component from '../Component.js';

class Menu extends Component {
    constructor(container, options) {
        super(container, options);
    }
    get items () {
        return this._group.items;
    }
    set items (items) {
        this._group.items = items;
    }
    _render(element, {id, title}) {
        element.classList.add('scanex-component-menu');
        element.classList.add('noselect');
        this._group = new Group(element, {id, title});
        this._group.on('item:click', e => {
            this._group.expanded = false;
            let event = document.createEvent('Event');
            event.initEvent('item:click', false, false);
            event.detail = e.detail;
            this.dispatchEvent(event);
        });
        window.addEventListener('click', () => this._group.expanded = false);
    }
}

export default Menu;