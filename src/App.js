import React, { useState } from 'react';
import Costs from './components/Costs/Costs';
import NewCost from './components/NewCost/NewCost';

const INITIAL_COSTS = [
  {
    id: 'c1',
    date: new Date(2021, 2, 12),
    description: 'Холодильник',
    amount: 888.88,
  },
  {
    id: 'c2',
    date: new Date(2021, 11, 11),
    description: 'Oneplus 7',
    amount: 380.18,
  },
  {
    id: 'c3',
    date: new Date(2021, 2, 12),
    description: 'Bosh',
    amount: 88.58,
  },
];

const App = () => {
  const [costs, setCosts] = useState(INITIAL_COSTS);

  // добавление нового расхода
  const addCostHandler = (cost) => {
    setCosts((prevCosts) => {
      return [cost, ...prevCosts];
    });
  };

  return (
    <div>
      <NewCost onAddCost={addCostHandler} />
      {/*внутрь компонента Costs мы переддаем атрибут costs с Costs.js тк мы должны использовать массив и => передаем массив costs*/}
      <Costs costs={costs} />
    </div>
  );
};

export default App;
