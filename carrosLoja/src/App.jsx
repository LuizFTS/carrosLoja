import Header from "./components/Header";
import MainContent from "./components/MainContent";

import Car from "./img/carros/Carro1.jpg";
import Car2 from "./img/carros/carro2.png";

const App = () => {
  const cars = [
    { id: 1, title: "Corolla Altis 2022", valor: 166990.0, img: Car },
    { id: 2, title: "RAM 3500 Limited Longhorn", valor: 399900, img: Car2 },
  ];

  return (
    <div className="App">
      <Header />
      <MainContent cars={cars} />
    </div>
  );
};

export default App;
