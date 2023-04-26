import { FaCarSide } from "react-icons/fa";

import Logo from "../img/svg/logo-no-background.svg";

import "../styles/components/header.sass";

const Header = () => {
  return (
    <div className="header">
      <h1>
        <img src={Logo} alt="AutoPrime" className="header-logo" />
        {/* <FaCarSide /> AutoPrime */}
      </h1>
      {/* <p>Qualidade e confiança em cada seminovo</p> */}

      <div className="header-right">
        <ul>
          <li>Home</li>
          <li>Sobre</li>
          <li>Contato</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
