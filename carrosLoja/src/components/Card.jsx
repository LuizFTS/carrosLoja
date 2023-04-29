import CardDetail from "./CardDetail";

const Card = (props) => {
  console.log(props.cars);
  return (
    <div className="main-content-card">
      <div className="main-content-card-img-container">
        <img src={props.cars.img} alt={props.cars.title} />
      </div>
      <h2>{props.cars.title}</h2>
      <div className="main-content-card-detail">
        <p className="main-content-card-detail-value">
          {props.cars.valor.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </p>
        <CardDetail />
      </div>
    </div>
  );
};

export default Card;
