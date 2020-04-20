import './Tabs.css';
import Component from '../Component';

class Tabs extends Component {
    constructor(container) {
        super(container);
        this._tabs = {};
        this._panels = {};
    }
    _render(container) {
        container.classList.add('scanex-tabs');
        this._tabsContainer = document.createElement('div');
        this._tabsContainer.classList.add('tabs');
        container.appendChild(this._tabsContainer);

        this._panelsContainer = document.createElement('div');
        this._panelsContainer.classList.add('panels');
        container.appendChild(this._panelsContainer);
    }
    _onTabClick(id, e) {
        e.stopPropagation();        
        this.selected = id;    
    }
    get selected () {
        return this._selected;
    }
    set selected (selected) {
        if (this.selected !== selected) {
            Object.keys(this._tabs).forEach(id => {
                if (id === selected) {
                    this._tabs[id].classList.add('selected');
                    this._panels[id].classList.remove('hidden');
                }
                else {
                    this._tabs[id].classList.remove('selected');
                    this._panels[id].classList.add('hidden');
                }            
            }); 
            this._selected = selected;            
            let event = document.createEvent('Event');
            event.initEvent('change:selected', false, false);
            this.dispatchEvent(event);
        }
    }
    addTab(id, label) {
        let tab = document.createElement('div');
        tab.classList.add('tab');
        tab.classList.add('noselect');        
        tab.classList.add(id);
        tab.innerText = label;
        tab.addEventListener('click', this._onTabClick.bind(this, id));
        this._tabsContainer.appendChild(tab);
        this._tabs[id] = tab;

        let panel = document.createElement('div');
        panel.classList.add('panel');        
        panel.classList.add('hidden');
        panel.classList.add(id);
        this._panelsContainer.appendChild(panel);
        this._panels[id] = panel;
        
        if(!this.selected) {
            this.selected = id;            
        }
        return panel;
    }
    removeTab(id) {
        this._tabsContainer.removeChild(this._tabs[id]);
        delete this._tabs[id];

        this._panelsContainer.removeChild(this._panels[id]);
        delete this._panels[id];

        if (this.selected === id) {            
            let tabs = Object.keys(this._tabs);
            if (tabs.length) {
                this.selected = tabs[0];                
            }
        }        
    }
}

export default Tabs;