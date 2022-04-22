import './Card.css';

const Card = (props) => {
  // что бы корректно оторажались стили в <Card className='cost-item'>.. тк из-да Card => className теперь не работает, то есть решение СОЗД переменную и укажем в ней все классы которые мы хотим употреблять
  const classes = 'card ' + props.className;
  return <div className={classes}>{props.children}</div>;
};

export default Card;
