import PropTypes from 'prop-types'
import NotifCard from '../../public/NotifCard';

import './main.css';

const UserInfo = () => (
    <NotifCard style="desk-notif-card_type_login desk-notif-card_login_yes">
        <div className="desk-notif-card__card" role="form" aria-label="Авторизация">
            <div className="desk-notif-card__login-title">
                <a className="home-link home-link_black_yes" href="https://web.archive.org/web/20190731005131/https://passport.yandex.ru/auth?origin=home_desktop_ru&amp;retpath=https%3A%2F%2Fmail.yandex.ru%2F%2F%3Fmsid%3D1564534292.17625.139949.267018%26m_pssp%3Ddomik&amp;backpath=https%3A%2F%2Fyandex.ru">Почта</a>
                <a className="home-link desk-notif-card__login-mail-promo" href="https://web.archive.org/web/20190731005131/https://passport.yandex.ru/registration/mail?from=mail&amp;origin=home_desktop_ru&amp;retpath=https%3A%2F%2Fmail.yandex.ru%2F">Завести почту</a>
            </div>
            <a className="button desk-notif-card__login-enter-expanded button_theme_gray i-bem" role="button" href="https://web.archive.org/web/20190731005131/https://passport.yandex.ru/auth?origin=home_desktop_ru&amp;retpath=https%3A%2F%2Fmail.yandex.ru%2F%2F%3Fmsid%3D1564534292.17625.139949.267018%26m_pssp%3Ddomik&amp;backpath=https%3A%2F%2Fyandex.ru">
                <span className="button__text">Войти в почту</span>
            </a>
        </div>
    </NotifCard>
);


export default UserInfo;