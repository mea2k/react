import PropTypes from 'prop-types'


import './main.css';

const MediaToggleLine = ({ id }) => (
    <div class="media-grid__toggle-line-wrap">
        <div className="media-grid__toggle-line media-grid__row">
            <span className="home-link media-grid__toggle-button home-link_pseudo_yes" tabIndex="0" role="button">
                <span className="media-grid__toggle-button-icon" aria-hidden="true">
                    <svg className="media-grid__toggle-button-icon-svg" width="12" height="9">
                        <path className="media-grid__icon-arrow" d="M6 7.5L.56 2.08l.88-.89L6 5.74l4.56-4.56.88.89z"></path>
                    </svg>
                    <span className="media-grid__toggle-button-icon-png"></span>
                </span>
                <span className="media-grid__toggle-button-content">Свернуть</span>
            </span>
        </div>
    </div>
);

MediaToggleLine.propTypes = {
    id: PropTypes.string,
};


export default MediaToggleLine;