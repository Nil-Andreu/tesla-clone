import styled from 'styled-components'
import { HiBadgeCheck } from "react-icons/hi";


export const Container = styled.div`
  background-color: #181818;
  position: relative;
  display: grid;
  grid-template-columns: 100vw;
  grid-template-rows: auto;
  justify-items: center;

  @media (min-width: 1400px){
    grid-template-rows: 130vh;
  }
`;

export const Wrap = styled.div`
  grid-column: 1/2;
  grid-row: 1/2;
  padding: 5em 0;
  height: 30vh;
  color: white;
`;

export const Title = styled.h1`
  font-size: 4rem;
  text-align: center;
  width: 80vw;
  clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
`;

export const Line = styled.div`
  width: 80vw;
  border-bottom: 1px solid white;
  transform: scaleX(1);
`;

export const Flex = styled.div`
  display: flex;
  flex-direction: column;
  column-gap: 5vw;
  margin-top: 30vh;
  align-items: center;
  justify-items: center;
  grid-column: 1/2;
  grid-row: 1/2;

  @media (min-width: 1400px) {
    flex-direction: row;
    margin-top: 5vh;
  }
`;

export const Card = styled.div`
  display: grid;
  grid-template-columns: 80vw;
  grid-template-rows: auto auto auto;
  clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);

  @media (min-width: 1400px) {
    grid-template-columns: 25vw;
    grid-template-rows: minmax(20vw, 200px), 15vh 30vh;
  }
`;

export const Subtitle = styled.h3`
  color: white;
  font-size: 2rem;
`;

export const Text = styled.div`
  color: white;
  font-size: 1.2rem;

  text-align: left;

  @media (min-width: 1400px) {
    font-size: 1rem;
  }
`;

export const CheckList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  padding: 3vh 0 0 0;
`;

export const CheckGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-items: left;
  vertical-align: middle;
`;

export const CheckIcon = styled(HiBadgeCheck)`
  color: #22d976;
  width: 20px;
  height: auto;
`;

export const CheckText = styled.p`
  padding-left: 20px;
  color: white;
  font-size: 1rem;
`;