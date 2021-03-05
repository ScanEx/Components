import Component from '../Component.js';
import Tab from './Tab.js';
import Panel from './Panel.js';
import './Sidebar.css';

export default class Sidebar extends Component {
    constructor(container) {
        super(container);
        this._current = null;
    }
    _render(element) {  
        element.classList.add('scanex-component-sidebar'); 
        element.innerHTML = `<div class="tabs"></div>
        <div class="panels"></div>`;
        this._tabs = {};
        this._tabsContainer = element.querySelector('.tabs');
        this._panels = {};
        this._panelsContainer = element.querySelector('.panels');
    }
    add(id, title = '') {
        const tab = new Tab(this._tabsContainer, {id, title});
        tab.on('tab:click', e => {
            if (this._current) {                
                this._panels[this._current].expanded = false;                
                this._tabs[this._current].expanded = false;
                if (this._current !== id) {
                    this._current = id;
                    this._panels[this._current].expanded = true;
                    this._tabs[this._current].expanded = true;
                }
                else {
                    this._current = null;
                }
            }
            else {                
                this._current = id;
                this._panels[this._current].expanded = true;
                this._tabs[this._current].expanded = true;
            }
            
            let event = document.createEvent('Event');
            event.initEvent('tab:click', false, false);
            event.detail = id;
            this.dispatchEvent(event);
        });
        this._tabs[id] = tab;        
        const panel = new Panel(this._panelsContainer, {id});
        this._panels[id] = panel;
        return panel.element;
    }
    remove(id) {
        this._tabs[id] && this._tabs[id].destroy();
        delete this._tabs[id];
        this._panels[id] && this._panels[id].destroy();
        delete this._panels[id];
    }
};