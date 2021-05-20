import React from "react";
import styled from "styled-components";

import image from "../images/Savitar.png";

import {animateScroll as scroll} from 'react-scroll'; /**Have to install it previously */

import { Link as LinkRouter } from "react-router-dom";
import { Link as LinkScroll /*, animateScroll as scroll*/ } from "react-scroll"; //https://www.digitalocean.com/community/tutorials/how-to-implement-smooth-scrolling-in-react-es

function Header({toggle}) {
  const toggleHome = () => {
    scroll.scrollToTop();
  }

  return (
    <Container>
      <Wrap1>
        <Logo src={image} onClick={toggleHome}/>
        <button onClick={toggle}>Change</button>
      </Wrap1>
      <Wrap2>
        <li>
          <Anchor
            activeClass="active"
            to="what"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            What?
          </Anchor>
        </li>
        <li>
          <Anchor
            activeClass="active"
            to="why"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Why?
          </Anchor>
        </li>
        <li>
          <Anchor>Pricing</Anchor>
        </li>
        <li>
          <AnchorLast>Sign In</AnchorLast>
        </li>
      </Wrap2>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  position: fixed;
  height: 80px;
  background-color: white;
  display: grid;
  grid-template-columns: 20vw 80vw;
  align-items: center;
  z-index: 10;
`;

const Wrap1 = styled.div`
  display: flex;
  margin-left: 20px;
  height: 60px;
  width: 60px;
  cursor: pointer;
  align-items: center;
  justify-items: center;
  position: relative;
`;  

const Logo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

//The before is displayed for the list item, for hovering the list item, and for the anchor react scroll
const Wrap2 = styled.ul`
  display: flex;
  flex-direction: row; //But this for the unordered list
  justify-content: flex-end;
  align-items: center;
  padding-right: 10vw;
  list-style: none;
  margin: 0;

  li {
    display: inline-block;
    margin: 0px 10px;
    padding: 0px 80px;
    border-radius: 8px;
    cursor: pointer;
    position: relative;
    text-decoration: none;

    &:before {
      content: "";
      position: absolute;
      background: #22d976;
      right: 20px;
      left: 20px;
      bottom: -20px;
      height: 3px;
      border-radius: 2px;
      transform: scaleX(0);
    }

    // For styling the last element list
    &:last-child {
      background-color: #22d976;
      box-shadow: 0px 4px 15px 0px rgb(74 210 96 / 47%);
      padding: 15px 60px;
      transition: all 250ms ease-in;

      &:hover {
        transform: scale(1.05);

        &:before {
          bottom: 500px; //Put this bottom so it does not appear in the screen for that button
        }
      }
    }

    // For the underline of each element
    &:hover {
      &:before {
        transform: scaleX(1);
        transition: all 250ms ease-in-out;
      }
    }
  }
`;

const Anchor = styled(LinkScroll)`
  text-decoration: none;
  color: #181818;

  &:before {
      content: "";
      position: absolute;
      background: #22d976;
      right: 20px;
      left: 20px;
      bottom: -20px;
      height: 3px;
      border-radius: 2px;
      transform: scaleX(0);
    }

  &.active {
    &:before {
      transform: scaleX(1);
      transition: all .5s ease-in-out;
    }
  }
`;

const AnchorLast = styled(LinkRouter)`
  text-decoration: none;
  color: white;

  &:visited {
    color: white;
  }
`;
