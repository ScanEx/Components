import './Slider2.css';
import Slider1 from "./Slider1.js";

class Slider2 extends Slider1 {
    constructor(container, {min, max}) {
        super(container, {min, max});
        this._leftTick.addEventListener('mousedown', this._start.bind(this, this._leftTick));
    }
    get lo() {
        return this._lo;
    }
    set lo(lo) {
        if(this.validate(lo) && (isNaN (this.hi) || lo <= this.hi)) {
            this._lo = lo;
        }
        this._updateUI();                
    }
    get hi() {
        return this._hi;
    }
    set hi(hi) {
        if(this.validate(hi) && (isNaN(this.lo) || this.lo <= hi)) {
            this._hi = hi;
        }
        this._updateUI();        
    }
    _slide(e){        
        e.stopPropagation();
        e.preventDefault();
        const tid = window.setTimeout(() => {
            window.clearTimeout(tid);
            if(this._tick) {
                const lt = this._leftTick.getBoundingClientRect();
                const rt = this._rightTick.getBoundingClientRect();
                const w =  lt.width + rt.width;
                const b = this._bar.getBoundingClientRect();
                const x = e.clientX - this._offset;
                if (this._tick === this._leftTick) {                
                    if (x > b.left) {
                        if(x + lt.width < rt.left) {
                            this._range.style.left = `${x - b.left}px`;
                            this._range.style.width = `${rt.right - x}px`;
                        }
                        else {
                            this._range.style.left = `${rt.left - lt.width - b.left}px`;
                            this._range.style.width = `${w}px`;
                        }
                    }                
                    this._updateBounds();                    
                }
                else if (this._tick === this._rightTick) {                
                    if (x < b.right - rt.width) {
                        if(lt.right < x) {
                            this._range.style.width = `${x - lt.right + w}px`;
                        }
                        else {                        
                            this._range.style.width = `${w}px`;
                        }
                    }                
                    this._updateBounds();                    
                }
            }
        }, this._delay);        
    }
    _click (e) {
        if (!this._tick) {
            e.stopPropagation();
            // const b = this._bar.getBoundingClientRect();
            // const t = this._rightTick.getBoundingClientRect();
            // const halfWidth = Math.round (t.width / 2);
            // if (e.clientX < b.left + halfWidth) {                
            //     this._range.style.width = `${t.width}px`;
            // }
            // else if (e.clientX > b.right - halfWidth) {
            //     this._range.style.width = `${b.width}px`;
            // }
            // else {
            //     this._range.style.width = `${e.clientX - b.left + halfWidth}px`;                
            // }        

            // this._updateBounds();
        }        
    }
    _updateUI() {
        if (!isNaN(this.lo) && !isNaN(this.hi)) {
            const lt = this._leftTick.getBoundingClientRect();
            const rt = this._rightTick.getBoundingClientRect();
            const w =  lt.width + rt.width;
            const b = this._bar.getBoundingClientRect();
            const k = (b.width - w) / (this.max - this.min);
            this._range.style.left = `${Math.round((this.lo - this.min) * k)}px`;
            this._range.style.width = `${Math.round((this.hi - this.lo) * k) + w}px`;
            
            let event = document.createEvent('Event');
            event.initEvent('change', false, false);
            this.dispatchEvent(event);
        }
    }
    _updateBounds() {                
        const b = this._bar.getBoundingClientRect();
        const lt = this._leftTick.getBoundingClientRect();
        const rt = this._rightTick.getBoundingClientRect();
        const w =  lt.width + rt.width;

        const k = (this.max - this.min) / (b.width - w);
        const lo = lt.left - b.left;
        this._lo = this.min + (this.mode === 'float' ? lo * k : Math.round (lo * k));
        const hi = rt.left - b.left - lt.width;
        this._hi = this.min + (this.mode === 'float' ? hi * k : Math.round (hi * k));
        
        let event = document.createEvent('Event');
        event.initEvent('change', false, false);
        this.dispatchEvent(event);
    }
    _render(element) {
        super._render(element);        
        element.classList.add('scanex-component-two-tick-slider');        
        this._leftTick = document.createElement('div');
        this._leftTick.classList.add('slider-tick');
        this._leftTick.classList.add('slider-tick-left');

        this._leftLabel = document.createElement('label'); 
        this._leftTick.appendChild(this._leftLabel);
        this._leftLabel.classList.add('hidden');

        let icn = document.createElement('i');
        this._leftTick.appendChild(icn);
        this._range.insertBefore(this._leftTick, this._rightTick);
    }
}

export default Slider2;