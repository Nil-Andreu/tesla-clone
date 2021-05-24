import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  position: sticky; //Position sticks in the top (stays in the top)
  top: 0;
  left: 0;
  right: 0;
  z-index: 2; //So the heade appears always
  justify-content: space-between;
  align-items: center;
  padding: 25px;
  padding-top: 15px;
`;

export const LogoContainer = styled.div`
  width: 90px;
`;

export const Img = styled.img`
  object-fit: contain;
  margin-right: 100px;
  flex: 1; //So the image occupies as much space as possible
`;

export const LinkContainer = styled.div`
  display: flex;
  gap: 15px; //This gives the margin of the children
  text-decoration: none;
  width: 40vw;
  color: black;

  a {
    //We can target the Link as if it is a anchor tag
    color: black;
    text-transform: uppercase;
    font-weight: 500;
    font-size: 15px;
    text-decoration: none;
  }
`;

export const Sidebar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  width: 24vw;

  a {
    color: black;
    text-transform: uppercase;
    font-weight: 500;
    font-size: 15px;
    text-decoration: none;
    z-index: 0;
    position: relative;
  }
`;

export const Menu = styled.div`
    .MuiSvgIcon-root {
        // This class is given by the material ui
        position: relative;
        z-index: 2;
        cursor: pointer;
    }
`;
