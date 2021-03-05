import Component from '../Component.js';
import './Tab.css';

export default class Tab extends Component {
    constructor(container, options) {
        super(container, options);
    }
    _render(element, options) {
        const {id, title, expanded} = options;        
        element.classList.add('scanex-component-sidebar-tab');
        element.innerHTML = `<i class="scanex-component-icon ${id}"></i><div>${title}</div>`;
        element.addEventListener('click', e => {
            e.stopPropagation();
            let event = document.createEvent('Event');
            event.initEvent('tab:click', false, false);
            event.detail = id;
            this.dispatchEvent(event);
        });
        this.expanded = expanded;
    }
    get id() {
        return this._options.id;
    }
    get expanded() {
        return this._expanded;
    }
    set expanded(expanded) {
        this._expanded = expanded;
        if (this._expanded) {
            this._element.classList.add('expanded');
        }
        else {
            this._element.classList.remove('expanded');
        }
    }
};