// import CostItem from './CostItem';
import './Costs.css';
import Card from '../UI/Card';
import CostsFilter from './CostsFilter';
import React, { useState } from 'react';
import CostList from './CostList';
import CostsDiagram from './CostsDiagram';

const Costs = (props) => {
  const [selectedYear, setSelectedYear] = useState('2021');

  const yearChangeHandler = (year) => {
    setSelectedYear(year);
  };

  const filteredCosts = props.costs.filter((cost) => {
    return cost.date.getFullYear().toString() === selectedYear;
  });

  return (
    <div>
      <Card className='costs'>
        <CostsFilter year={selectedYear} onChangeYear={yearChangeHandler} />
        <CostsDiagram costs={filteredCosts} />
        {/* {costsContent} */}
        <CostList costs={filteredCosts} />
        {/* {filteredCosts.length === 0 && <p>В Этом Году Расходов Нет</p>}
        {filteredCosts.length > 0 &&
          filteredCosts.map((cost) => (
            <CostItem
              key={cost.id}
              date={cost.date}
              description={cost.description}
              amount={cost.amount}
            />
          ))} */}

        {/* <CostItem
          date={props.costs[0].date}
          description={props.costs[0].description}
          amount={props.costs[0].amount}
        />
        <CostItem
          date={props.costs[1].date}
          description={props.costs[1].description}
          amount={props.costs[1].amount}
        />
        <CostItem
          date={props.costs[2].date}
          description={props.costs[2].description}
          amount={props.costs[2].amount}
        /> */}
      </Card>
    </div>
  );
};

export default Costs;
