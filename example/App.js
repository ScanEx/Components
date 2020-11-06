import './App.css';
import '../src/icons.css';
import lorem from './lorem.txt';
import Dialog from '../src/Dialog/Dialog.js';
import Form from '../src/Form/Form.js';
import Menu from '../src/Menu/Menu.js';
import * as Sliders from '../src/Sliders/index.js';
import Spinner from '../src/Spinner/Spinner.js';
import Tabs from '../src/Tabs/Tabs.js';

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
            <td>Single Slider:</td>
            <td class="slider-single"></td>
        </tr>
        <tr>
            <td>Single Range:</td>
            <td class="range-single"></td>
        </tr>
        <tr>
            <td>Double Slider:</td>
            <td class="slider-double"></td>
        </tr>
        <tr>
            <td>Double Range:</td>
            <td class="range-double"></td>
        </tr>
        <tr>
            <td>Triple Slider:</td>
            <td class="slider-triple"></td>
        </tr>
        <tr>
            <td>Triple Range:</td>
            <td class="range-triple"></td>
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
    spinner.value = 5;
    // spinner.on('change', e => alert(`spinner: ${e.detail}`));

    let sld = new Sliders.Slider1(ctrl.querySelector('.slider-single'), {min: 0, max: 100});
    sld.hi = 14;    
    
    // sld.on('stop', e => alert(`slider: ${sld.lo} - ${sld.hi}`));

    let rng = new Sliders.Interval(ctrl.querySelector('.range-single'), {min: 1, max:21, slider: Sliders.Slider1});
    rng.hi = 14;

    let dbl = new Sliders.Slider2(ctrl.querySelector('.slider-double'), {min: 1, max: 21});
    dbl.lo = 4;
    dbl.hi = 12;
    
    let dr = new Sliders.Interval(ctrl.querySelector('.range-double'), {min: 1, max: 21, slider: Sliders.Slider2});
    dr.lo = 4;
    dr.hi = 18;

    let tpl = new Sliders.Slider3(ctrl.querySelector('.slider-triple'), {min: 1, max: 21});
    tpl.lo = 4;
    tpl.hi = 18;
    tpl.mi = 12;
    // tpl.on('change', console.log);

    let tr = new Sliders.Interval3(ctrl.querySelector('.range-triple'), {min: 1, max: 21});
    tr.lo = 4;
    tr.hi = 18;
    tr.mi = 12;
    // tr.on('change', () => {
    //     console.log(tr.lo, ', ', tr.mi, ', ', tr.hi);
    // });

    let dlg;
    let btn = ctrl.querySelector('.button');
    btn.addEventListener('click', e => {
        e.stopPropagation();
        e.preventDefault();        
        if (dlg) {
            dlg.destroy();
            dlg = null;
        }
        dlg = new Dialog({title: 'Lorem ipsum',id: 'lorem', collapsible: true});
        dlg.content.innerText = lorem;
        dlg.footer.innerText = 'Footer';
        dlg.addEventListener('close', () => {
            dlg.destroy();
            dlg = null;
        });
    });
});