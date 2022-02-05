import PropTypes from 'prop-types'
import NewsWrapper from '../../Layouts/NewsWrapper';
import NewsCard from '../cards/NewsCard';

import './main.css';

const TopNews = ({ newsItems, stockings, date }) => (
    <NewsWrapper>
        <NewsCard date={date} newsItems={newsItems} stockings={stockings}/>
            
 
    </NewsWrapper>
);


export default TopNews;