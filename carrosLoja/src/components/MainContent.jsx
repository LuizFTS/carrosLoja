import React from "react";
import Card from "./Card";

import "../styles/components/maincontent.sass";

const MainContent = (props) => {
  console.log(props);
  return (
    <div className="main-content">
      {props.cars.map((car) => {
        return <Card cars={car} key={car.id} />;
      })}
    </div>
  );
};

export default MainContent;
