import React, { useState } from 'react';
import './NewCost.css';
import CostForm from './CostForm';

const NewCost = (props) => {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const saveCostDataHandler = (inputCostData) => {
    const costData = {
      ...inputCostData,
      id: Math.random().toString(),
    };

    props.onAddCost(costData);
    // console.log(costData);
    setIsFormVisible(false);
  };

  const inputCostDataHandler = () => {
    setIsFormVisible(true);
  };

  const cancelCostHandler = () => {
    setIsFormVisible(false);
  };

  return (
    <div className='new-cost'>
      {!isFormVisible && (
        <button onClick={inputCostDataHandler}>Добавить Новый Расход</button>
      )}

      {/* добавим в наш компонент CostForm атрибут с любым именем для передачи инф от наследника к родителю   */}
      {isFormVisible && (
        <CostForm
          onSaveCostData={saveCostDataHandler}
          onCancel={cancelCostHandler}
        />
      )}
    </div>
  );
};

export default NewCost;
