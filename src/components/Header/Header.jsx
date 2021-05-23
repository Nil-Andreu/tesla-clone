import { Link } from "react-router-dom";

import { Container, LogoContainer, Img } from "./HeaderComponents";

// Gonna use the arrow functions
const Header = () => {
  return (
    <Container>
      <LogoContainer>
        <Link to="/">
          <Img
            src="https://assets.website-files.com/5e8fceb1c9af5c3915ec97a0/5ec2f037975ed372da9f6286_Tesla-Logo-PNG-HD.png"
            alt=""
          />
        </Link>
      </LogoContainer>
    </Container>
  );
};

export default Header;
