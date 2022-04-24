import './NewCost.css';
import CostForm from './CostForm';

const NewCost = (props) => {
  const saveCostDataHandler = (inputCostData) => {
    const costData = {
      ...inputCostData,
      id: Math.random().toString(),
    };

    props.onAddCost(costData);
    // console.log(costData);
  };

  return (
    <div className='new-cost'>
      {/* добавим в наш компонент CostForm атрибут с любым именем для передачи инф от наследника к родителю   */}
      <CostForm onSaveCostData={saveCostDataHandler} />
    </div>
  );
};

export default NewCost;
