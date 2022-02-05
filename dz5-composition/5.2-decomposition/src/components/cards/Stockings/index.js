import PropTypes from 'prop-types'
import CourseItem from './CourseItem';
import StocksItem from './StocksItem';

import './main.css';

const Stockings = ({ stocks, date, ...rest }) => (
    <div className="inline-stocks inline-stocks_new_yes" aria-label="Котировки" role="complementary">
        <div className="inline-stocks__content text_black_yes">

            {stocks.exchange && stocks.exchange.map((v) => (
                <StocksItem item={v} date={date} key={v.id} inline />
            ))}

            <div className="b-inline inline-stocks__nowrap inline-stocks__part">
                {stocks.course && stocks.course.map((v) => (
                    <CourseItem item={v} date={date} key={v.id} />
                ))}

                <span className="link inline-stocks__more link_pseudo_yes" title="ещё" tabIndex="0" aria-haspopup="true" aria-expanded="false" role="button">
                    <img aria-hidden="true" className="b-icon inline-stocks__more-icon" src="/public/stockings/delimiter.gif" />
                    <span className="link__inner"></span>
                </span>
            </div>
            <div className="inline-stocks__popup">
                <h1 className="inline-stocks__title">Котировки</h1>
                <div className="inline-stocks__tables"></div>
                <div className="inline-stocks__error">Данные недоступны</div>
                <div className="inline-stocks__loader">
                    <div className="spin2 spin2_view_default spin2_tone_default spin2_size_l spin2_progress_yes"></div>
                </div>
            </div>
        </div>
    </div>
);

Stockings.propTypes = {
    stocks: PropTypes.object.isRequired,
    date: PropTypes.instanceOf(Date)
};


export default Stockings;