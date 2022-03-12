import React from 'react';
import SearchForm from '../../components/SearchForm';
import ServiceList from '../../components/ServiceList';

const MainPage = ({ url }) => (
    <div>
        <SearchForm url={url} />
        <ServiceList />
    </div>
);

export default MainPage;