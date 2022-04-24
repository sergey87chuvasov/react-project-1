import React, { useState } from 'react';
import './CostForm.css';

const CostForm = (props) => {
  // пустая строка тк в начале отображения инпутов ничего нет, деструктур для получения 2х эл
  const [inputName, setInputName] = useState('');
  const [inputAmount, setInputAmount] = useState('');
  const [inputDate, setInputDate] = useState('');

  // общий подход
  // const [userInput, setUserInput] = useState({
  //   name: '',
  //   amount: '',
  //   date: '',
  // });

  const nameChangeHandler = (event) => {
    setInputName(event.target.value);

    // setUserInput({
    //   ...userInput,
    //   name: event.target.value,
    // });
    // setUserInput((previousState) => {
    //   return {
    //     ...previousState,
    //     name: event.target.value,
    //   };
    // });
  };

  const amountChangeHandler = (event) => {
    setInputAmount(event.target.value);

    // setUserInput({
    //   ...userInput,
    //   amount: event.target.value,
    // });
  };

  const dateChangeHandler = (event) => {
    setInputDate(event.target.value);

    // setUserInput({
    //   ...userInput,
    //   date: event.target.value,
    // });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const costData = {
      name: inputName,
      amount: inputAmount,
      date: new Date(inputDate),
    };

    props.onSaveCostData(costData);
    // запись нового значения в инпут  + value={inputName} те очистка инпутов
    setInputName('');
    setInputAmount('');
    setInputDate('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className='new-cost__controls'>
        <div className='new-cost__control'>
          <label>Название</label>
          <input type='text' value={inputName} onChange={nameChangeHandler} />
        </div>
        <div className='new-cost__control'>
          <label>Сумма</label>
          <input
            type='number'
            onChange={amountChangeHandler}
            value={inputAmount}
            min='0.01'
            step='0.01'
          />
        </div>
        <div className='new-cost__control'>
          <label>Дата</label>
          <input
            type='date'
            value={inputDate}
            onChange={dateChangeHandler}
            min='2019-01-01'
            step='2022-12-31'
          />
        </div>
        <div className='new-cost__actions'>
          <button type='submit'>Добавить расход</button>
        </div>
      </div>
    </form>
  );
};

export default CostForm;
