
import './main.css';

const LastRow = ({ children }) => (
    <div className="row rows__row rows__row_last">
        <div className="col footer" role="complementary">
            <div className="media-grid media-grid_visible_no media-grid_theme_white i-bem font-regular">
                {children}
            </div>
        </div>
    </div>
)


export default LastRow;