import React from 'react';

import './main.css';

/////////////////////////////////////////////////
///             БЛОК HOC                     ////
/////////////////////////////////////////////////


// Формирование месяца из даты (для индекса для REDUCE)
function monthsReducer(value) {
    return new Date(value).toLocaleString('en-US', { month: 'short' });
}

// Формирование года из даты (для индекса для REDUCE)
function yearReducer(value) {
    return new Date(value).getFullYear();
}



// Новая функция формирования и отображения даты в формате ITEMPROPNAME-AMOUNT
function withModifiedData(reduceFunc, itemPropName) {
    return function (Component, propNameFrom) {
        function Wrapper(props) {
            let result = [];
            if (props[propNameFrom]) {
                // формируем массив типа MONTH - AMOUNT
                // складываем все записи с одного месяца
                //const m = new Date(props.list[0].date).toLocaleString('default', { month: 'short' });
                let reducedData = props[propNameFrom].reduce((res, item) => {
                    const index = reduceFunc(item.date);
                    res[index] = (res[index] || 0) + item.amount;
                    return res;
                }, []);

                for (let key of Object.keys(reducedData)) {
                    result.push({
                        [itemPropName]: key,
                        amount: reducedData[key]
                    })
                }
            }
            const newProps = {
                [propNameFrom]: result
            }
            // возврат исходного компонента с новой датой
            return (
                <Component {...props} {...newProps} />
            )
        }
        return Wrapper;
    }
};


// Новая функция формирования и отображения отсортированных данных
// PROPNAME - какие данные из PROPS надо сортировать
// ITEMPROPNAME - как называется поле в массиве PROPNAME, по которому осуществлять сортировку
// COMPONENT - какой компонент нарисовать
function withSortedData(propName, itemPropName, Component) {
    // функция сортировки элементов по полю ITEMPROPNAME
    function sortItems(a, b) {
        return a[itemPropName] < b[itemPropName] ? -1 : a[itemPropName] > b[itemPropName] ? 1 : 0;
    }

    function Wrapper(props) {
        let newProps = {};
        // если PROPNAME не пустой - запускаем сортировку
        if (props[propName]) {
            newProps = {
                [propName]: props[propName].sort(sortItems)
            }
        }
        // возврат исходного компонента с новыми данными
        return (
            <Component {...props} {...newProps} />
        )
    }
    return Wrapper;
};



// новые компоненты с оберткой
const UpgradedMonthTable = withModifiedData(monthsReducer, 'month')(MonthTable, 'list');
const UpgradedYearTable = withModifiedData(yearReducer, 'year')(YearTable, 'list');
const UpgradedSortTable = withSortedData('list', 'date', SortTable);

// Дважды обертка
const SortedUpgradedMonthTable = withSortedData('list','month',withModifiedData(monthsReducer, 'month')(MonthTable, 'list'));


/////////////////////////////////////////////////
///             ИСХОДНЫЙ КОД                 ////
/////////////////////////////////////////////////

function YearTable(props) {
    console.log('YearTable', props);

    return (
        <div>
            <h2>Year Table</h2>
            <table>
                <thead>
                    <tr>
                        <th>Year</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {props.list.map((item, key) => (
                        <tr key={key}>
                            <td>{item.year}</td>
                            <td>{item.amount}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

function SortTable(props) {
    console.log('SortTable', props);

    return (
        <div>
            <h2>Sort Table</h2>
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {props.list.map((item, key) => (
                        <tr key={key}>
                            <td>{item.date}</td>
                            <td>{item.amount}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

function MonthTable(props) {
    console.log('MonthTable', props);

    return (
        <div>
            <h2>Month Table</h2>
            <table>
                <thead>
                    <tr>
                        <th>Month</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {props.list.map((item, key) => (
                        <tr key={key}>
                            <td>{item.month}</td>
                            <td>{item.amount}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};


const URL = 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hoc/aggregation/data/data.json'

export default class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            list: []
        };

    }

    componentDidMount() {
        fetch(URL)
            .then((result) => result.json())
            .then((data) => this.setState({ ...data }))
            .catch((error) => console.log(error));
    }


    render() {
        const { list } = this.state;
        return (
            <div id="app">
                <UpgradedMonthTable list={list} />
                <UpgradedYearTable list={list} />
                <UpgradedSortTable list={list} />
                <SortedUpgradedMonthTable list={list} />
                <MonthTable list={list} />
                <YearTable list={list} />
                <SortTable list={list} />
            </div>
        );
    }
}