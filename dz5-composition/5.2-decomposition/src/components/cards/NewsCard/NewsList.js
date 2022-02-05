import PropTypes from 'prop-types'
import AnimatedList from './AnimatedList';
import StaticList from './StaticList';


const NewsList = ({ items, showItemsNumber, ...rest }) => {

    return (
        <div className="news__panel mix-tabber-slide2__panel" role="tabpanel" id="news_panel_news" data-key="news" aria-labelledby="news_tab_news">
            <StaticList items={items.slice(0, showItemsNumber)} />

            <AnimatedList items={items.slice(showItemsNumber)} />

        </div>


    );
}

NewsList.propTypes = {
    items: PropTypes.array,
    showItemsNumber: PropTypes.number,
};

NewsList.defaultProps = {
    showItemsNumber: 5
}


export default NewsList;