import './CostItem.css';
import Card from '../UI/Card';
import CostDate from './CostDate.js';
import React, { useState } from 'react';

const CostItem = (props) => {
  const [description, setDescription] = useState(props.description);

  const changeDiscHandler = () => {
    // устанавл новое знач для состояния description и вызов функции CostItem
    setDescription('New Text - test useState');
    console.log(description);
  };

  return (
    <Card className='cost-item'>
      <CostDate date={props.date} />
      <div className='cost-item__description'>
        <h2>{description}</h2>
        <div className='cost-item__price'>${props.amount}</div>
      </div>
      <button onClick={changeDiscHandler}>Изменить описание</button>
    </Card>
  );
};

export default CostItem;
