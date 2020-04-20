import './App.css';
import Dialog from '../src/Dialog/Dialog.js';
import Form from '../src/Form/Form.js';
import InputNumber from '../src/InputNumber/InputNumber.js';
import Tabs from '../src/Tabs/Tabs.js';

window.addEventListener('load', () => {
    let tabs = new Tabs(document.body);
    let controlsTab = tabs.addTab('controls', 'Controls');
    let controlsForm = new Form(controlsTab, {
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
    controlsForm.setValue('label', 'Label 1');
    controlsForm.setValue('input', 'Text 1');
    controlsForm.setValue('text', 'Text 2');

    let aTab = tabs.addTab('atab', 'Another Tab');
});