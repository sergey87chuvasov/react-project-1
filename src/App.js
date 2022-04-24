import Costs from './components/Costs/Costs';
import NewCost from './components/NewCost/NewCost';

const App = () => {
  const costs = [
    {
      date: new Date(2021, 2, 12),
      description: 'Холодильник',
      amount: 888.88,
    },
    {
      date: new Date(2021, 11, 11),
      description: 'Oneplus 7',
      amount: 380.18,
    },
    {
      date: new Date(2021, 2, 12),
      description: 'Bosh',
      amount: 88.58,
    },
  ];

  return (
    <div>
      <NewCost />
      {/*внутрь компонента Costs мы переддаем атрибут costs с Costs.js тк мы должны использовать массив и => передаем массив costs*/}
      <Costs costs={costs} />
    </div>
  );
};

export default App;
