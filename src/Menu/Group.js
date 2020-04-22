import './Group.css';
import Item from './Item.js';
import Component from '../Component';

class Group extends Component {
    constructor(container, {id, title}) {
        super(container);
        this._items = [];        
        this._id = id;
        this._title.innerText = title;
        this.expanded = false;
        this._element.addEventListener('click', this._onClick.bind(this));       
    }
    _onClick (e) {
        e.stopPropagation();
        this.expanded = !this.expanded;
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
    get expanded () {
        return this._expanded;
    }
    set expanded (expanded) {
        this._expanded = expanded;
        if (expanded) {
            this._expander.classList.remove('down');
            this._expander.classList.add('up');
            this._children.classList.remove('hidden');
        }
        else {
            this._expander.classList.remove('up');
            this._expander.classList.add('down');
            this._children.classList.add('hidden');
        }        
    }    
    clear() {
        this._element.removeEventListener('click', this._onClick);
        this._items.forEach(item => item.clear());
    }
    get items () {
        return this._items;
    }
    set items (items) {
        this.clear();
        this._items = items.map(({id, title, children}) => {
            let item;
            if (Array.isArray(children)) {
                item = new Group(this._children, {id, title});                
                item.items = children;
            }
            else {
                item = new Item(this._children, {id, title});
            }
            item.parent = this;
            item.addEventListener('item:click', this.forwardEvent.bind(this));
            return item;
        });
    }
    _render (element) {        
        element.classList.add('scanex-menu-group');        

        this._header = document.createElement('div');
        this._header.classList.add('scanex-menu-group-header');
        element.appendChild(this._header);
        
        this._title = document.createElement('label');
        this._title.classList.add('scanex-menu-group-title');
        this._header.appendChild(this._title);        

        this._expander = document.createElement('i');
        this._expander.classList.add('icon');
        this._expander.classList.add('scanex-menu-group-expander');
        this._header.appendChild(this._expander);
        
        this._children = document.createElement('div');
        this._children.classList.add('scanex-menu-group-children');
        this._children.classList.add('hidden');
        element.appendChild(this._children);        
    }
}

export default Group;