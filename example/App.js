import './App.css';
import '../src/icons.css';
import lorem from './lorem.txt';
import Dialog from '../src/Dialog/Dialog.js';
import Form from '../src/Form/Form.js';
import Spinner from '../src/Spinner/Spinner.js';
import Tabs from '../src/Tabs/Tabs.js';

window.addEventListener('load', () => {
    let tabs = new Tabs(document.body);
    let formTab = tabs.addTab('form', 'Form');
    let form = new Form(formTab, {
        label: {
            type: 'label',
            label: 'Label',
        },
        input: {
            type: 'input',
            label: 'Input',
        },
        text: {
            type: 'text',
            label: 'Text',
            placeholder: 'Enter text',
        }
    });
    form.setValue('label', 'Label 1');
    form.setValue('input', 'Text 1');
    form.setValue('text', 'Text 2');

    let ctrl = tabs.addTab('controls', 'Controls');

    ctrl.innerHTML = `<table>
        <tr>
            <td>Spinner:</td>
            <td class="spinner"></td>
        </tr>
        <tr>
            <td>Button:</td>
            <td class="button">
                <button>Dialog</button>
            </td>
        </tr>
    </table>`;

    let spinner = new Spinner(ctrl.querySelector('.spinner'));
    spinner.min = 0;
    spinner.max = 10;    

    let dlg;
    let btn = ctrl.querySelector('.button');
    btn.addEventListener('click', e => {
        e.stopPropagation();
        if (dlg) {
            dlg.destroy();
            dlg = null;
        }
        dlg = new Dialog('Lorem ipsum', 'lorem');
        dlg.content.innerText = lorem;
        dlg.footer.innerText = 'Footer';
        dlg.addEventListener('close', () => {
            dlg.destroy();
            dlg = null;
        });
    });
});