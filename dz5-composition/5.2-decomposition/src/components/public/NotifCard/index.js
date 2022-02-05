import PropTypes from 'prop-types'

import './main.css';

const NotifCard = ({ style, children, ...rest }) => (
    <div className={`desk-notif-card desk-notif-card_bg_default i-bem ${style}`} {...rest}>
        {children}
    </div>
)

export default NotifCard;