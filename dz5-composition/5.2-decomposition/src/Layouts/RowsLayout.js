
import './main.css';

const RowsLayout = ({ children }) => (
    <div className="container rows">
        <div className="rows__bg">
            <div className="skin__on-bg"></div>
        </div>
        {children}
    </div>
)


export default RowsLayout;