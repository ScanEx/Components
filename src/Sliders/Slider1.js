import './Slider1.css';
import Component from '../Component';

class Slider1 extends Component {
    constructor(container, {min, max}) {
        super(container);
        this._delay = 50;
        this._tick = null;
        this._offset = 0;
        if (!isNaN(min) && !isNaN(max)) {
            this._min = min;
            this._max = max;
        }
        else {
            throw "min or max not set";
        }                  
        this._rightTick.addEventListener('mousedown', this._start.bind(this, this._rightTick));        
        document.body.addEventListener('mousemove', this._slide.bind(this));        
        document.body.addEventListener('mouseup', this._stop.bind(this));
        this._bar.addEventListener('click', this._click.bind(this));
    }
    get mode() {
        return this._mode;
    }
    set mode(mode) {
        this._mode = mode;
    }
    get min() {
        return this._min;
    }
    get max() {
        return this._max;
    }
    get lo() {
        return this._min;
    }        
    get hi() {
        return this._hi;
    }
    set hi(hi) {
        if(this.validate(hi) && isNaN(this.lo) || this.lo <= hi) {
            this._hi = hi;
        }
        if (!isNaN(this.lo) && !isNaN(this.hi)) {
            const b = this._bar.getBoundingClientRect();        
            const t = this._rightTick.getBoundingClientRect();
            const k = (b.width - t.width) / (this.max - this.min);

            this._range.style.width = `${Math.round((this.hi - this.lo) * k) + t.width}px`;

            let event = document.createEvent('Event');
            event.initEvent('change', false, false);
            this.dispatchEvent(event);
        }
    }  
    validate(value) {
        return !isNaN(value) && this.min <= value && value <= this.max;
    }    
    _stop(){
        if(this._tick !== null) {
            this._tick = null;
            this._offset = 0;                   
            let event = document.createEvent('Event');
            event.initEvent('stop', false, false);            
            this.dispatchEvent(event);
        }        
    }    
    _start(tick, e){        
        e.stopPropagation();
        e.preventDefault();
        if(this._tick === null) {
            
            this._tick = tick;
            const t = this._tick.getBoundingClientRect();
            this._offset = e.clientX - t.left;

            let event = document.createEvent('Event');
            event.initEvent('start', false, false);
            this.dispatchEvent(event);            
        }
    }    
    _slide(e){        
        e.stopPropagation();
        e.preventDefault();        
        
        const tid = window.setTimeout(() => {
            window.clearTimeout(tid);
            if(this._tick) {
                const t = this._tick.getBoundingClientRect();            
                const b = this._bar.getBoundingClientRect();
                const x = e.clientX - this._offset;
                if (b.left <= x && x + t.width <= b.right) {                    
                    this._range.style.width = `${e.clientX - this._offset + t.width - b.left}px`;
                    this._updateBounds();                    
                }
            }
        }, this._delay);        
    } 
    _click (e) {
        if (!this._tick) {
            e.stopPropagation();
            const b = this._bar.getBoundingClientRect();
            const t = this._rightTick.getBoundingClientRect();
            const halfWidth = Math.round (t.width / 2);
            if (e.clientX < b.left + halfWidth) {                
                this._range.style.width = `${t.width}px`;
            }
            else if (e.clientX > b.right - halfWidth) {
                this._range.style.width = `${b.width}px`;
            }
            else {
                this._range.style.width = `${e.clientX - b.left + halfWidth}px`;                
            }        

            this._updateBounds();            
        }        
    }   
    _updateBounds() {
        const b = this._bar.getBoundingClientRect();
        const t = this._rightTick.getBoundingClientRect();
        const k = (this.max - this.min) / (b.width - t.width);
        this._lo = this.min;        
        const hi = t.left - b.left;
        this._hi = this.min + (this.mode === 'float' ? hi * k : Math.round (hi * k));

        let event = document.createEvent('Event');
        event.initEvent('change', false, false);            
        this.dispatchEvent(event);
    }
    _render(element) {        
        element.classList.add('scanex-component-slider');
        element.classList.add('no-select');
        element.innerHTML =
            `<div class="slider-bar">
                <div class="slider-range">
                    <div class="slider-tick slider-tick-right">
                        <label></label>
                        <i></i>
                    </div>
                </div>
            </div>`;
        this._rightLabel = element.querySelector('.slider-tick label');
        this._rightLabel.classList.add('hidden');
        this._bar = element.querySelector('.slider-bar');
        this._rightTick = element.querySelector('.slider-tick-right');        
        this._range = element.querySelector('.slider-range');
    }
}

export default Slider1;