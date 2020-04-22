import './Slider.css';
import Component from '../Component.js';

class Slider extends Component {
    constructor(container) {
        super(container);        
        this._current = null;        
        this._min = 0;
        this._max = 0;
        this._lo = 0;
        this._hi = 0;
        this._leftTick.addEventListener('mousedown', this._start.bind(this, 'left'));        
        this._rightTick.addEventListener('mousedown', this._start.bind(this, 'right'));
        document.body.addEventListener('mouseup', this._stop.bind(this));
        document.body.addEventListener('mousemove', this._slide.bind(this));        
        this._bar.addEventListener('click', this._handleBarClick.bind(this));
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
    set min(min) {
        if(!isNaN(min) && min <= this.max) {
            this._min = min;
            if (!this._lo) {
                this._lo = this._min;
                let event = document.createEvent('Event');
                event.initEvent('change', false, false);            
                this.dispatchEvent(event);
            }            
        }        
    }
    get max() {
        return this._max;
    }
    set max(max) {
        if (!isNaN(max) && this.min <= max){
            this._max = max;
            if (!this._hi) {
                this._hi = this._max;
                let event = document.createEvent('Event');
                event.initEvent('change', false, false);            
                this.dispatchEvent(event);
            }         
        }    
    }
    _validate(value) {
        return !isNaN(value) && this._min <= value && value <= this._max;
    }
    get lo() {
        return this._lo;
    }
    set lo(lo) {
        if(this._validate(lo) && lo <= this.hi) {
            this._lo = lo;            
        }
        let { width } = this._bar.getBoundingClientRect();
        const leftRect = this._leftTick.getBoundingClientRect();
        const rightRect = this._rightTick.getBoundingClientRect();
        const k = (width - leftRect.width - rightRect.width) / (this.max - this.min);
        this._range.style.left = `${Math.round((this._lo - this.min) * k)}px`;
        this._range.style.width = `${Math.round((this._hi - this._lo) * k) + leftRect.width + rightRect.width}px`;
        let event = document.createEvent('Event');
        event.initEvent('change', false, false);            
        this.dispatchEvent(event);
    }
    get hi() {
        return this._hi;
    }
    set hi(hi) {
        if(this._validate(hi) && this.lo <= hi) {            
            this._hi = hi;
        }
        let { width } = this._bar.getBoundingClientRect();
        const leftRect = this._leftTick.getBoundingClientRect();
        const rightRect = this._rightTick.getBoundingClientRect();
        const k = (width - leftRect.width - rightRect.width) / (this.max - this.min);
        this._range.style.left = `${Math.round((this._lo - this.min) * k)}px`;
        this._range.style.width = `${Math.round((this._hi - this._lo) * k) + leftRect.width + rightRect.width}px`;
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
                    <i class="slider-tick-left"></i>
                    <i class="slider-tick-right"></i>
                </div>
            </div>`;
        this._bar = element.querySelector('.slider-bar');            
        this._leftTick = element.querySelector('.slider-tick-left');
        this._rightTick = element.querySelector('.slider-tick-right');
        this._range = element.querySelector('.slider-range');
    }       
    _handleBarClick (e) {
        e.stopPropagation();    
        const x = e.clientX;        
        let leftRect = this._leftTick.getBoundingClientRect();
        let rightRect = this._rightTick.getBoundingClientRect();        
        if (x < leftRect.left || leftRect.right < x && x < rightRect.left || rightRect.right < x) {
            let {left, right} = this._bar.getBoundingClientRect();
            let rangeRect = this._range.getBoundingClientRect();
            let min = rangeRect.left + leftRect.width;
            let max = rangeRect.right - rightRect.width;
            if (Math.abs (x - min) < Math.abs (max - x)) { // left tick
                if (x > left + leftRect.width) {
                    this._range.style.left = `${x - left - leftRect.width}px`;
                    this._range.style.width = `${rangeRect.right - x + leftRect.width}px`;
                }
                else { // leftmost
                    this._range.style.left = `${0}px`;
                    this._range.style.width = `${rangeRect.right - left}px`;
                }            
            }
            else { // right tick
                if (x < right - rightRect.width) {
                    this._range.style.width = `${x - rangeRect.left + rightRect.width}px`;
                }
                else { // rightmost
                    this._range.style.width = `${right - rangeRect.left}px`;
                }
            }
            this._updateBounds();
            let event = document.createEvent('Event');
            event.initEvent('change', false, false);            
            this.dispatchEvent(event);
        }        
    }    
    _start(tick, e){
        e.stopPropagation();    
        if(this._current === null) {
            this._current = tick;
            switch (this._current) {
                case 'left':
                    let leftRect = this._leftTick.getBoundingClientRect();
                    this._offset = e.clientX - leftRect.left;
                    break;
                case 'right':
                    let rightRect = this._rightTick.getBoundingClientRect();
                    this._offset = rightRect.right - e.clientX;
                    break;
            }
            let event = document.createEvent('Event');
            event.initEvent('start', false, false);            
            this.dispatchEvent(event);
        }                
    }
    _stop(e){
        e.stopPropagation();
        if(this._current !== null) {
            this._current = null;
            this._offset = 0;                   
            let event = document.createEvent('Event');
            event.initEvent('stop', false, false);            
            this.dispatchEvent(event);
        }        
    }
    _slide(e){
        e.stopPropagation();
        if(this._current) {
            switch(this._current){
                case 'left':                                   
                    this._handleLeftSlide(e.clientX - this._offset);                    
                    break;
                case 'right':                    
                    this._handleRightSlide(e.clientX + this._offset);                   
                    break;
                default:
                    break;
            }
        }                
    }
    _handleLeftSlide (x){
        let leftRect = this._leftTick.getBoundingClientRect();
        let rightRect = this._rightTick.getBoundingClientRect();
        const max = this._range.getBoundingClientRect().right;
        let { left } = this._bar.getBoundingClientRect();
        const totalWidth =  leftRect.width + rightRect.width;
        if (x < max - totalWidth) {
            if(x < left) { // min
                this._range.style.left = `${0}px`;
                this._range.style.width = `${max - left}px`;
            }
            else {                
                this._range.style.left = `${x  - left}px`;
                this._range.style.width = `${max - x}px`;
            }
        }
        else { // rightmost
            this._range.style.left = `${max - totalWidth - left}px`;
            this._range.style.width = `${totalWidth}px`;
        }        
        this._updateBounds();

        let event = document.createEvent('Event');
        event.initEvent('change', false, false);        
        this.dispatchEvent(event);
    }
    _handleRightSlide (x){
        let leftRect = this._leftTick.getBoundingClientRect();
        let rightRect = this._rightTick.getBoundingClientRect();
        const min = this._range.getBoundingClientRect().left;
        let { left, right } = this._bar.getBoundingClientRect();
        const totalWidth =  leftRect.width + rightRect.width;
        if (x > min + totalWidth) {
            if(x > right) { // max
                this._range.style.width = `${right - min}px`;
            }
            else {                
                this._range.style.width = `${x - min}px`;
            }
        }
        else { // leftmost            
            this._range.style.width = `${totalWidth}px`;
        }        
        this._updateBounds();

        let event = document.createEvent('Event');
        event.initEvent('change', false, false);        
        this.dispatchEvent(event);
    }
    _updateBounds() {        
        const {width, left} = this._bar.getBoundingClientRect();        
        const leftRect = this._leftTick.getBoundingClientRect();
        const rightRect = this._rightTick.getBoundingClientRect();

        const k = (this.max - this.min) / (width - leftRect.width - rightRect.width);
        const lo = leftRect.left - left;
        this._lo = this.min + (this.mode === 'float' ? lo * k : Math.round (lo * k));
        const hi = rightRect.left - rightRect.width - left;
        this._hi = this.min + (this.mode === 'float' ? hi * k : Math.round (hi * k));
    }
}

export default Slider;