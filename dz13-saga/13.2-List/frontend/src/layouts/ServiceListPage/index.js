import React from 'react';
import PropTypes from 'prop-types'
import ServiceList from '../../components/ServiceList';

const ServiceListPage = ({ itemLink }) => (
    <div>
        <ServiceList itemLink={itemLink} />
    </div>
);

ServiceListPage.propTypes = {
    itemLink: PropTypes.string
};


export default ServiceListPage;