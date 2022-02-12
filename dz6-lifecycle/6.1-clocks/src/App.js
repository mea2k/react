import Clocks from './components/Clocks';

import { CountriesData } from './const.js';

import './main.css';

const App = () => {
    return (
        <div>
            <Clocks {...CountriesData} />
        </div>
    );
}





export default App;
