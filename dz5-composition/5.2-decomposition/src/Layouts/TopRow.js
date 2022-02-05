import React from 'react';

import './main.css';

const TopRow = ({ children }) => (
    <div className="row rows__row rows__row_first">
        <div className="col" role="complementary">
            <div className="container headline">
                <div className="row">
                    {React.Children.map(children, (child, i) => (
                        <>
                            {child}
                            <div className="col headline__item headline__center"></div>
                        </>)
                    )}
                </div>
            </div>
        </div>
    </div>
)


export default TopRow;