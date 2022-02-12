
import Crud from './components/Crud';

import './main.css';

const serverURL = 'http://localhost:7777/notes/'

const App = () => {
    return (
        <div>
            <Crud server={serverURL} />
        </div>
    );
}





export default App;
