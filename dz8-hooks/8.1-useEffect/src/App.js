import React, { useState } from 'react';
import Details from './components/Details';
import List from './components/List';

import './main.css';


//const listUrl = "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json"
 const listUrl = "/data/users.json";

//const detailsUrl = "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/%7Bid%7D.json"
const detailsUrl = "/data/";

const App = () => {

    // выбранный пользователь
    const [userId, setUserId] = useState();

    const handleSelectUser = (id) => {
        setUserId(id);
    }

    //console.log(userId);

    return (
        <div className="container">
            <List url={listUrl} handleSelect={handleSelectUser} />
            {userId && (
                <Details url={detailsUrl} userId={userId} />
            )}
        </div>
    );
}



export default App;