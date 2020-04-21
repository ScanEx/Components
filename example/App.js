import './App.css';
import '../src/icons.css';
import lorem from './lorem.txt';
import Dialog from '../src/Dialog/Dialog.js';
import Form from '../src/Form/Form.js';
import Spinner from '../src/Spinner/Spinner.js';
import Tabs from '../src/Tabs/Tabs.js';
import Menu from '../src/Menu/Menu.js';

window.addEventListener('load', () => {
    let header = document.createElement('div');
    header.classList.add('app-header');
    document.body.appendChild(header);

    let menu = new Menu(header, {id: 'users', title: 'Users'});
    menu.items = [
        {
            id: 'user1',
            title: 'User1',
            children: [
                {id: 'account', title: 'Account'},
                {id: 'map', title: 'Map'},
                {id: 'logout', title: 'Logout'}
            ]
        },
        {
            id: 'user2',
            title: 'User2',
            children: [
                {id: 'account', title: 'Account'},
                {id: 'map', title: 'Map'},
                {id: 'logout', title: 'Logout'}
            ]
        },
    ];
    menu.addEventListener('item:click', e => {
        alert(`Selected: ${e.detail}`);
    });

    let content = document.createElement('div');
    content.classList.add('app-content');
    document.body.appendChild(content);

    let tabs = new Tabs(content);
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