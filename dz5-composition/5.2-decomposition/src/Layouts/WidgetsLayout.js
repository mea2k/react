import React from 'react';

import './main.css';

const WidgetsLayout = ({ children }) => (
    <div className="container container__heap container__line heap heap_direction_column">

        {children}

    </div>
)


export default WidgetsLayout;