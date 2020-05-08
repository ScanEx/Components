import Interval from "./Interval.js";
import Slider3 from "./Slider3.js";

class Interval3 extends Interval {
    constructor(container, {min, max}) {
        super(container, {min, max, slider: Slider3});
    }
    get mi() {
        return this._slider.mi;
    }
    set mi(mi) {
        this._slider.mi = mi;
    }    
}

export default Interval3;