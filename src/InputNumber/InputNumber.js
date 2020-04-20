import Component from "../Component.js";

class InputNumber extends Component {
    constructor(container) {
        super(container);
    }
    _render(element) {
        element.classList.add('input-number');
    }
}

export default InputNumber;