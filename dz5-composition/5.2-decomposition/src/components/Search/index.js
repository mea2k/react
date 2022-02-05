import PropTypes from 'prop-types'

import './main.css';
import SearchBlock from './SearchBlock';
import SearchLogo from './SearchLogo';

const Search = ({formData, services }) => (
    <div className="row second text_black_yes">
        <SearchLogo />
        <SearchBlock formData={formData} services={services}/>
    </div>
);


export default Search;