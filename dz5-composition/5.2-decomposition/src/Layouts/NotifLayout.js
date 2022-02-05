import PropTypes from 'prop-types'

import './main.css';

const NotifLayout = ({ title, children }) => (
    <div className="desk-notif__wrapper">
        <div className="desk-notif" role="complementary" aria-label={title}>
            {children}
        </div>
    </div>
)

NotifLayout.propTypes = {
    title: PropTypes.string,
};

NotifLayout.defaultProps = {
    title: "Уведомления"
}


export default NotifLayout;