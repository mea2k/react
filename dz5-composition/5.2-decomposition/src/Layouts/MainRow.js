
import './main.css';

const MainRow = ({ children }) => (
    <div className="row rows__row rows__row_main">
        <div className="col main widgets i-bem" role="main">
            {children}
        </div>
    </div>
)


export default MainRow;