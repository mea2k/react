import Card from './components/Card';

import { CardsData } from './const.js';

import './main.css';

const App = () => {
    return (
        <div className="container">
            {CardsData.map((item, key) => (
                item.children ? (
                    <Card key={key}
                        img={item.img}
                        title={item.title}
                        link={item.link}
                    >
                        {item.children}
                    </Card>
                ) : (
                    <Card key={key}
                        img={item.img}
                        title={item.title}
                        link={item.link}
                    />
                )
            ))}
        </div>
    );
}





export default App;
