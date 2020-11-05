import './Spinner.css';
import Component from "../Component.js";

class Spinner extends Component {
    constructor(container) {
        super(container);
        this._value = 0;
        this._min = 0;
        this._max = 0;
        this._up.addEventListener('click', this.increment.bind(this));
        this._down.addEventListener('click', this.decrement.bind(this));
        this._input.addEventListener('change', this._onChange.bind(this));
    }
    _onChange(e) {
        e.stopPropagation();
        this.value = parseInt (this._input.value, 10);        
    }
    get value() {
        return this._value;
    }
    set value(value) {
        if (this._validate(value)) {
            this._value = value;
            let event = document.createEvent('Event');
            event.initEvent("change", false, false);
            event.detail = this._value;
            this.dispatchEvent(event);
        }        
        this._input.value = this._value.toString();  
    }
    get min() {
        return this._min;
    }
    set min(min) {
        if (!isNaN(min)) {
            this._min = min;
        }
    }
    get max() {
        return this._max;
    }
    set max(max) {
        if (!isNaN(max) && this._min <= max) {
            this._max = max;
        }        
    }
    _validate(value) {
        return !isNaN(value) && this._min <= value && value <= this._max;
    }
    increment(e) {
        e.stopPropagation();
        this.value = this._value + 1;
    }
    decrement(e) {
        e.stopPropagation();
        this.value = this._value - 1;
    }
    _render(element) {
        element.classList.add('scanex-component-spinner');
        element.innerHTML = `<input type="text" value="0"/>
        <div class="buttons">
            <i class="scanex-component-icon spinner-up"></i>            
            <i class="scanex-component-icon spinner-down"></i>
        </div>`;
        this._input = element.querySelector('input');
        this._up = element.querySelector('.spinner-up');
        this._down = element.querySelector('.spinner-down');
    }
}

export default Spinner;