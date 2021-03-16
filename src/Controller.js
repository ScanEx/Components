import Evented from '@scanex/evented';
import * as Request from './Request.js';
import Translation from '@scanex/translations';
import Notification from './Notification/Notification.js';
import en from './strings.en.json';
import ru from './strings.ru.json';

const NOTIFY_TIMEOUT = 5000;

const translate = Translation.getText.bind(Translation);

Translation.addText('ru', ru);
Translation.addText('en', en);

export default class Controller extends Evented {
    constructor() {
        super();        
    }
    async _httpGet(url, options) {
        const {status, result} = await Request.httpGet(url, options);
        const ok = this._status(status);
        return {ok, result};
    }
    async _httpPost(url, options) {
        const {status, result} = await Request.httpPost(url, options);
        const ok = this._status(status);
        return {ok, result};
    }
    _status(status) {
        switch(status) {
            case 200:
                Notification.info(translate('notify.info'), NOTIFY_TIMEOUT);
                return true;
            case 400:
                Notification.error(translate('notify.error.badrequest'), NOTIFY_TIMEOUT);
                return false;
            case 401:
                Notification.error(translate('notify.error.unauthorized'), NOTIFY_TIMEOUT);
                return false;
            case 403:
                Notification.error(translate('notify.error.forbidden'), NOTIFY_TIMEOUT);
                return false;
            case 404:
                Notification.error(translate('notify.error.notfound'), NOTIFY_TIMEOUT);
                return false;
            case 500:
                Notification.error(translate('notify.error.server'), NOTIFY_TIMEOUT);
                return false;
            case 502:
                Notification.error(translate('notify.error.gateway'), NOTIFY_TIMEOUT);
                return false;
            case 503:
                Notification.error(translate('notify.error.unavailable'), NOTIFY_TIMEOUT);
                return false;
            default:
                Notification.error(translate('notify.error.other'), NOTIFY_TIMEOUT);
                return false;
        }
    }
};