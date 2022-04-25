import './Diagram.css';
import DiagramBar from './DiagramBar';

const Diagram = (props) => {
  const dataSetsValues = props.dataSets.map((dataSet) => dataSet.value);

  const maxMonthCosts = Math.max(...dataSetsValues);

  return (
    <div className='diagram'>
      {/* dataSets - это какой-то атрибут, получаем его через пропс */}
      {props.dataSets.map((dataSet) => (
        <DiagramBar
          key={dataSet.label}
          value={dataSet.value}
          maxValue={maxMonthCosts}
          label={dataSet.label}
        />
      ))}
    </div>
  );
};

export default Diagram;
