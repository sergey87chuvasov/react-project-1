import './CostsFilter.css';

const CostsFilter = (props) => {
  const yearChangeHandler = (event) => {
    // console.log(event.target.value);
    props.onChangeYear(event.target.value);
  };

  return (
    <div className='costs-filter'>
      <div className='costs-filter__control'>
        <label className='costs-filter label'>Выбор По Году</label>
        <select
          className='costs-filter select'
          value={props.year}
          onChange={yearChangeHandler}
        >
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default CostsFilter;
