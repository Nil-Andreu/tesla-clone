import { Link } from "react-router-dom";

// To import the menu icons, from the material-ui we can see cool ones
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";

import {
  Container,
  LogoContainer,
  Img,
  LinkContainer,
  Sidebar,
  MenuDiv
} from "./HeaderComponents";

// Gonna use the arrow functions. In this arrow we could pass the properties ass props, or each in an object list
const Header = ({isOpen, setIsOpen}) => {
  const changeOpen = () => {
    setIsOpen(!isOpen)
  };

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
      <LinkContainer>
        <Link to="/">Model S</Link>
        <Link to="/">Model 3</Link>
        <Link to="/">Model x</Link>
        <Link to="/">Model Y</Link>
        <Link to="/">Solar Roof</Link>
        <Link to="/">Solar Panel</Link>
      </LinkContainer>
      <Sidebar>
        <Link to="/" className={isOpen && "hidden_side"}>Shop</Link>
        <Link to="/login" className={isOpen && "hidden_side"}>Tesla Account</Link>

        <MenuDiv onClick={changeOpen}>{isOpen ? <CloseIcon /> : <MenuIcon />}</MenuDiv>
      </Sidebar>
    </Container>
  );
};

// The hidden side class is defined in App.css, and will be applied hwen the sidebar is open so it is not above it
export default Header;
