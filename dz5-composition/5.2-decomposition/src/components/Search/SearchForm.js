import PropTypes from 'prop-types'

import './main.css';
import ServiceLinks from './ServiceLinks';

const SearchForm = ({ msid, lr, action, title }) => (
    <form className="search2 suggest2-form suggest2-form__node suggest2-counter i-bem suggest2-form_stats_yes" action={action} role="search" aria-label={title}>
        <input type="hidden" name="lr" value={lr} />
        <input type="hidden" name="msid" value={msid} />
        <div className="search2__input">
            <span className="input suggest2-form__input input_size_ws-head input_theme_websearch input_search2-clear-hide_yes input_ahead_yes input_autofocus_capture input_keyboard_yes input_clear_yes i-bem">
                <span className="input__box">
                    <span className="input__clear" unselectable="on">&nbsp;</span>
                    <div className="keyboard-loader input__keyboard-button i-bem b-opacity b-opacity-hold-ie">
                        <i className="b-ico keyboard-loader__icon"></i>
                    </div>
                    <input className="input__control input__input" tabIndex="2" autoComplete="off" autoCorrect="off" autoCapitalize="off" spellCheck="false" aria-autocomplete="list" aria-label="Запрос" id="text" maxLength="400" autoFocus="" name="text" />
                </span>
            </span>
        </div>
        <div className="search2__button">
            <button className="button suggest2-form__button button_theme_websearch button_size_ws-head i-bem" tabIndex="-1" role="button" type="submit">
                <span className="button__text">Найти</span>
            </button>
        </div>
        <div className="i-bem popup suggest2 suggest2-history suggest2_theme_flat suggest2_size_m suggest2_adaptive_yes suggest2_type_advanced suggest2_ahead_yes suggest2_history_yes suggest2_rich_yes popup_adaptive_yes popup_animate_no popup_autoclosable_yes popup_no-return-focus_yes popup_theme_ffffff" data-bem="{&quot;popup&quot;:{&quot;directions&quot;:&quot;bottom-left&quot;},&quot;suggest2&quot;:{&quot;url&quot;:&quot;//yandex.ru/suggest/suggest-ya.cgi?srv=morda_ru_desktop&amp;wiz=TrWth&amp;uil=ru&amp;fact=1&amp;v=4&amp;icon=1&amp;lr=87&amp;hl=1&amp;bemjson=1&amp;history=1&amp;html=1&amp;platform=desktop&amp;rich_nav=1&amp;show_experiment=222&amp;show_experiment=224&amp;verified_nav=1&amp;rich_phone=1&amp;yu=4907163671564532091&quot;,&quot;onFocus&quot;:&quot;show&quot;,&quot;aheadFromServer&quot;:true,&quot;submitBySelect&quot;:true,&quot;requestOnEmptyInput&quot;:true,&quot;deleteHistoryUrl&quot;:&quot;//yandex.ru/suggest-delete-text?srv=morda_ru_desktop&amp;text_to_delete=&quot;,&quot;providerMods&quot;:{&quot;history&quot;:&quot;yes&quot;},&quot;viewMods&quot;:{&quot;rich&quot;:&quot;yes&quot;},&quot;crossDomain&quot;:true,&quot;flow&quot;:&quot;&quot;,&quot;swytExp&quot;:false},&quot;suggest2-detect&quot;:{},&quot;suggest2-history&quot;:{&quot;other&quot;:[],&quot;running&quot;:[]}}">
            <div className="popup__under"></div>
            <div className="popup__content"> </div>
        </div>
    </form>
);

SearchForm.propTypes = {
    msid: PropTypes.string,
    lr: PropTypes.number,
    action: PropTypes.string,
    title: PropTypes.string,
};

SearchForm.defaultProps = {
    msid: '1564534292.17625.139949.267018',
    lr: 87,
    action: 'https://web.archive.org/web/20190731005131/https://yandex.ru/search/',
    title: 'Поиск в интернете',
}

export default SearchForm;