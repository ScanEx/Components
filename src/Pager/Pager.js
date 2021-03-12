import './Pager.css';
import T from '@scanex/translations';
import Component from '../Component.js';

const translate = T.getText.bind(T);
T.addText('ru', {
    pager: {        
        previous: 'Предыдущая',
        next: 'Следующая',
    }
});

class Pager extends Component {
    constructor(container) {
        super(container);               
    }
    _render(element) {
        element.classList.add('scanex-component-pager');
        element.innerHTML = `<table cellpadding="0" cellspacing="0">
            <tr>
                <td>
                    <button class="first">1</button>
                </td>                
                <td>
                    <button class="previous">${translate('pager.previous')}</button>
                </td>
                <td>
                    <input type="text" value="" />
                </td>
                <td>
                    <button class="next">${translate('pager.next')}</button>
                </td>                
                <td>
                    <button class="last"></button>
                </td>
            </tr>
        </table>`;
        element.querySelector('.first').addEventListener('click', e => {
            e.stopPropagation();
            this.page = 1;
        });
        element.querySelector('.previous').addEventListener('click', e => {
            e.stopPropagation();
            this.page -= 1;
        });
        element.querySelector('.next').addEventListener('click', e => {
            e.stopPropagation();
            this.page += 1;
        });
        element.querySelector('.last').addEventListener('click', e => {
            e.stopPropagation();
            this.page = this.pages;
        });
        this._current = element.querySelector('input');
        this._current.addEventListener('change', e => {
            e.stopPropagation();
            this.page = parseInt (this._current.value, 10);
        });
        this._last = element.querySelector('.last');
        this._pages = 1;
        this.page = 1;
    }
    get page() {
        return this._page;
    }
    set page(page) {
        if (Number.isInteger(page) && 1 <= page && page <= this.pages && this._page !== page) {
            this._page = page;
            this._current.value = this._page;
            let event = document.createEvent('Event');
            event.initEvent('change', false, false);
            this.dispatchEvent(event);
        }
        else {
            this._current.value = this._page;
        }
    }
    get pages() {
        return this._pages;
    }
    set pages(pages) {
        if (pages && Number.isInteger(pages)) {
            this._pages = pages;
            this._last.innerText = pages;
        }
    }
}

export default Pager;