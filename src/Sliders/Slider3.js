import './Slider3.css';
import Slider2 from "./Slider2.js";

class Slider3 extends Slider2 {
    constructor(container, {min, max}) {
        super(container, {min, max});
        this._middleTick.addEventListener('mousedown', this._start.bind(this, this._middleTick));
    }
    // get lo() {
    //     return this._lo;
    // }
    // set lo(lo) {
    //     if(this.validate(lo) && (isNaN (this.hi) || lo <= this.hi)) {
    //         this._lo = lo;
    //     }
    //     this._updateUI();        
    // }
    get mi() {
        return this._mi;
    }
    set mi(mi) {
        if(this.validate(mi) && (isNaN(this.lo) || this.lo <= mi) && (isNaN(this.hi) || mi <= this.hi)) {
            this._mi = mi;
        }        
        this._updateUI();
    }
    // get hi() {
    //     return this._hi;
    // }
    // set hi(hi) {
    //     if(this.validate(hi) && (isNaN(this.lo) || this.lo <= hi)) {
    //         this._hi = hi;
    //     }        
    //     this._updateUI();
    // }
    _updateUI() {
        if (!isNaN(this.lo) && !isNaN(this.mi) && !isNaN(this.hi)) {
            const lt = this._leftTick.getBoundingClientRect();
            const mt = this._middleTick.getBoundingClientRect();
            const rt = this._rightTick.getBoundingClientRect();
            const w = lt.width + mt.width + rt.width;
            const b = this._bar.getBoundingClientRect();
            const k = (b.width - w) / (this.max - this.min);
            this._range.style.left = `${Math.round((this.lo - this.min) * k)}px`;
            this._range.style.width = `${Math.round((this.hi - this.lo) * k) + w}px`;
            this._middleTick.style.left = `${Math.round((this.mi - this.min) * k) + lt.width}px`;
            
            let event = document.createEvent('Event');
            event.initEvent('change', false, false);
            this.dispatchEvent(event);
        }
    }
    _updateBounds() {                
        const lt = this._leftTick.getBoundingClientRect();
        const mt = this._middleTick.getBoundingClientRect();
        const rt = this._rightTick.getBoundingClientRect();
        const w = lt.width + mt.width + rt.width;
        const b = this._bar.getBoundingClientRect();
        const k =  (this.max - this.min) / (b.width - w);

        const lo = lt.left - b.left;
        this._lo = this.min + (this.mode === 'float' ? lo * k : Math.round (lo * k));

        const mi = mt.left - b.left - lt.width;
        this._mi = this.min + (this.mode === 'float' ? mi * k : Math.round (mi * k));
        this._middleLabel.innerText = this.mode === 'float' ? this._mi.toFixed(2) : this._mi.toString();

        const hi = rt.left - b.left - lt.width - mt.width;
        this._hi = this.min + (this.mode === 'float' ? hi * k : Math.round (hi * k));
        
        let event = document.createEvent('Event');
        event.initEvent('change', false, false);
        this.dispatchEvent(event);
    }
    _start(tick, e) {
        super._start(tick, e);
        this._mtLeft = this._middleTick.offsetLeft;
        if (tick === this._middleTick) {
            this._middleLabel.classList.remove('hidden');
        }        
    }
    _stop(){
        super._stop();
        this._mtLeft = 0;
        this._middleLabel.classList.add('hidden');
    }
    _slide(e){        
        e.stopPropagation();
        e.preventDefault();
        if(this._tick) {
            const lt = this._leftTick.getBoundingClientRect();
            const mt = this._middleTick.getBoundingClientRect();
            const rt = this._rightTick.getBoundingClientRect();
            const w = lt.width + mt.width + rt.width;
            const b = this._bar.getBoundingClientRect();
            const x = e.clientX - this._offset;
            if (this._tick === this._leftTick) {
                if(b.left <= x && x + lt.width <= mt.left) {
                    this._range.style.left = `${x - b.left}px`;
                    this._range.style.width = `${rt.right - x}px`;
                    this._middleTick.style.left = `${this._mtLeft}px`;
                    this._updateBounds();
                }                
            }
            else if (this._tick === this._middleTick) {
                if (lt.right <= x && x + mt.width <= rt.left) {
                    this._middleTick.style.left = `${x - b.left}px`;
                    this._updateBounds();
                }                
            } 
            else if (this._tick === this._rightTick) {
                if (mt.left + mt.width <= x && x + rt.width <= b.left + b.width) {
                    this._range.style.width = `${x + rt.width - lt.left}px`;
                    this._updateBounds();
                }                                
            }                        
        }
    }
    _render(element) {
        super._render(element);        
        element.classList.add('scanex-component-three-tick-slider');
        this._middleTick = document.createElement('div');
        this._middleTick.classList.add('slider-tick');
        this._middleTick.classList.add('slider-tick-middle');
        this._middleLabel = document.createElement('label');
        this._middleLabel.classList.add('hidden');
        this._middleTick.appendChild(this._middleLabel);
        let icn = document.createElement('i');
        this._middleTick.appendChild(icn);
        this._bar.appendChild(this._middleTick);
    }
}

export default Slider3;