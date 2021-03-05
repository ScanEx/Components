import Component from '../Component.js';
import './Panel.css';

export default class Panel extends Component {
    constructor(container, options) {
        super(container, options);
    }
    _render(element, options) {
        const {id, title, expanded} = options;        
        element.classList.add('scanex-component-sidebar-panel');
        this.expanded = expanded || false;
    }
    get id() {
        return this._options.id;
    }
    get expanded () {
        return this._expanded;
    }
    set expanded (expanded) {        
        this._expanded = expanded;
        if (this._expanded) {
            this._element.classList.remove('hidden');
        }
        else {
            this._element.classList.add('hidden');
        }
    }
};