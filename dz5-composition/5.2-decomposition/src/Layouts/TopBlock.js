import React from 'react';
import ColGap from '../components/public/ColGap';

import './main.css';

const TopBlock = ({ children }) => (
    <div className="container container__first container__line container_shrinkable_yes">
        <div className="row first text_black_yes widgets__row widgets__row_tr_1">

            {React.Children.map(children, (child, i) => (
                <div className="col col_td_0 widgets__col">
                    {child}
                </div>
            ))}
            <ColGap />
        </div>
    </div>
)


export default TopBlock;