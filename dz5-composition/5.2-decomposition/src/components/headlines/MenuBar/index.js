import React from 'react';

const MenuBar = ({ children }) => (
    <div className="col headline__item headline__bar">
        <div className="container headline__bar_stuff">
            <div className="row headline__bar-items">
                {React.Children.map(children, (child, i) => (
                    <div className="col headline__bar-item ">
                        {child}
                    </div>)
                )}
            </div>
        </div>
    </div>
)


export default MenuBar;