import './Range.css';
import Slider from "../Slider/Slider";
import Component from '../Component';

class Range extends Component {
    constructor(container) {
        super(container);        
        this._slider = new Slider(this._sliderElement);
        this._slider.on('change', e => {            
            this._lo.value = this._slider.lo.toString();
            this._hi.value = this._slider.hi.toString();
        });
    }
    get min() {
        return this._slider.min;
    }
    set min(min) {
        this._slider.min = min;        
    }
    get max() {
        return this._slider.max;
    }
    set max(max) {
        this._slider.max = max;
    }    
    get lo() {
        return this._slider.lo;
    }
    set lo(lo) {
        this._slider.lo = lo;
    }
    get hi() {
        return this._slider.hi;
    }
    set hi(hi) {
        this._slider.hi = hi;
    } 
    _render(element) {
        element.classList.add('scanex-component-range');
        element.innerHTML = `<table>
            <tr>
                <td>
                    <input class="lo" type="text" />
                </td>
                <td>
                    <div class="slider"></div>
                </td>
                <td>
                    <input class="hi" type="text" />
                </td>
            </tr>
        </table>`;
        this._lo = element.querySelector('.lo');
        this._hi = element.querySelector('.hi');
        this._sliderElement = element.querySelector('.slider');
    }
}

export default Range;