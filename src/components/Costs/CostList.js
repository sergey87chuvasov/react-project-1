import './CostList.css';
import CostItem from './CostItem';

const CostList = (props) => {
  // let costsContent = <p>В Этом Году Расходов Нет</p>;
  // if (props.costs.length > 0) {
  //   costsContent =
  // }

  if (props.costs.length === 0) {
    return <h2 className='cost-list__fallback'>В Этом Году Расходов Нет</h2>;
  }

  return (
    <ul className='cost-list'>
      {props.costs.map((cost) => (
        <CostItem
          key={cost.id}
          date={cost.date}
          description={cost.description}
          amount={cost.amount}
        />
      ))}
    </ul>
  );
};

export default CostList;
