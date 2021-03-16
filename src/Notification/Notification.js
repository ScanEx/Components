import Evented from '@scanex/evented';
import './Notification.css';
import Translation from '@scanex/translations';
import en from './strings.en.json';
import ru from './strings.ru.json';

const translate = Translation.getText.bind(T);

const delay = timeout => new Promise(resolve => {
    const id = window.setInterval(() => {
        window.clearInterval(id);
        resolve();
    }, timeout);
});

class Notification extends Evented {
    constructor() {
        super();
        this._container = document.createElement('div');
        this._container.classList.add('scanex-notify-container');                
        document.body.appendChild(this._container);
    }    
    _remove(el) {
        el.classList.add('closing');
        delay(1000).then(() => {
            el.remove();
            el = null;
        });       
    }
    error(text, timeout = 0) {        
        let el = document.createElement('div');    
        el.classList.add('scanex-notify');
        el.classList.add('noselect');
        el.classList.add('notify-red');
        el.classList.add('opening');
        el.innerHTML = `<table cellspacing="0" cellpadding="0">
            <tr>
                <td>
                    <div></div>
                </td>
                <td>
                    <i class="scanex-component-icon notify-error"></i>
                </td>            
                <td class="text">
                    <label class="title">${translate('notify.error')}</label>                
                    <div class="message">${text}</div>
                </td>
                <td>            
                    <i class="scanex-component-icon notify-close"></i>
                </td>
            </tr>
        </table>`;        
        this._container.appendChild(el);        
        const btnClose = el.querySelector('.notify-close');
        btnClose.addEventListener('click', e => {
            e.stopPropagation();            
            this._remove(el);
        });
        if (timeout) {            
            delay(timeout).then(() => this._remove(el));
        }        
    }
    warn(text, timeout = 0) {
        let el = document.createElement('div');        
        el.classList.add('scanex-notify');        
        el.classList.add('noselect');
        el.classList.add('notify-orange');
        el.classList.add('opening');
        el.innerHTML = `<table cellspacing="0" cellpadding="0">
            <tr>
                <td>
                    <div></div>
                </td>
                <td>
                    <i class="scanex-component-icon notify-warn"></i>
                </td>    
                <td class="text">
                    <label class="title">${translate('notify.warn')}</label>
                    <div class="message">${text}</div>    
                </td>            
                <td>
                    <i class="scanex-component-icon notify-close"></i>
                </td>
            </tr>
        </table>`;        
        this._container.appendChild(el);
        const btnClose = el.querySelector('.notify-close');
        btnClose.addEventListener('click', e => {
            e.stopPropagation();
            this._remove(el);
        });             
        if (timeout) {
            delay(timeout).then(() => this._remove(el));
        }
    } 
    info(text, timeout = 0) {
        let el = document.createElement('div');        
        el.classList.add('scanex-notify');
        el.classList.add('noselect');
        el.classList.add('notify-green');
        el.classList.add('opening');
        el.innerHTML = `<table cellspacing="0" cellpadding="0">
            <tr>
                <td>
                    <div></div>
                </td>
                <td>
                    <i class="scanex-component-icon notify-info"></i>
                </td>            
                <td class="text">
                    <label class="title">${translate('notify.info')}</label>                    
                    <div class="message">${text}</div>    
                </td>                                
                <td>
                    <i class="scanex-component-icon notify-close"></i>
                </td>
            </tr>
        </table>`;        
        this._container.appendChild(el);
        const btnClose = el.querySelector('.notify-close');
        btnClose.addEventListener('click', e => {
            e.stopPropagation();
            this._remove(el);
        });             
        if (timeout) {
            delay(timeout).then(() => this._remove(el));
        }
    }
}

Translation.addText('ru', ru);
Translation.addText('en', en);

export default new Notification();