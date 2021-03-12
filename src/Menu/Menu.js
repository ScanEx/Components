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
            this.forwardEvent(e);
        });
        this._group.on('expanded', this.forwardEvent.bind(this));
        window.addEventListener('click', () => this._group.expanded = false);
    }
    set expanded(expanded) {
        this._group.expanded = expanded;
    }
    get expanded() {
        return this._group.expanded;
    }
}

export default Menu;