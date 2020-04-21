import './Form.css';
import Component from "../Component";

class Form extends Component {
    constructor(container, fields) {
        super(container);
        this._fields = fields || {};
        this._init(this._element, this._fields);
    }    
    _onChange (id, e) {
        e.stopPropagation();
        let event = document.createEvent('Event');
        event.initEvent('change', false, false);
        event.detail = id;
        this.dispatchEvent(event);
    }
    setValue (id, value) {
        const e = this._values[id];
        if (e) {
            const {type} = this._fields[id];
            switch(type) {
                case 'label':                
                    e.innerText = value;
                    break;                
                case 'input':
                case 'text':
                    e.value = value;
                    break;                
                default:
                    break;
            }
        }
    }
    getValue (id) {
        const e = this._values[id];
        if (e) {
            const {type} = this._fields[id];
            switch(type) {
                case 'label':                
                    return e.innerText;                    
                case 'input':
                case 'text':
                    return e.value;                            
                default:
                    break;
            }
        }
    }
    _init(element, fields) {
        element.classList.add('scanex-component-form');
        const create_value = (type, id, placeholder) => {
            switch(type) {
                case 'label':                    
                    return `<label class="form-value-${id}"><label>`;
                case 'input':
                    return `<input type="text" class="form-value-${id}" />`;
                case 'text':
                    return `<textarea rows="8" placeholder="${placeholder}" class="form-value-${id}"></textarea>`;
                default:
                    return '';
            }
        };
        const rows = Object.keys (fields)
            .map(id => {
                const {label, type, placeholder} = fields[id];
                return `<tr>
                    <td>
                        <label class="form-label-${id}">${label}</label>
                    </td>
                    <td>${create_value(type, id, placeholder)}</td>
                </tr>`;
            });
        if (rows.length > 0) {
            element.innerHTML = `<table cellspacing="0" cellpadding="0">${rows.join('')}</table>`;
            this._values = Object.keys(fields).reduce((a, id) => {
                const {type} = fields[id];
                let e = element.querySelector(`.form-value-${id}`);
                switch(type) {
                    case 'input':
                        e.addEventListener('change', this._onChange.bind(this, id));
                        break;
                    default:
                        break;
                }
                a[id] = e;
                return a;
            }, {});
        }        
    }
}

export default Form;