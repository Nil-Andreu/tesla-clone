import styled from "styled-components";

export const Container = styled.div`
  background: url("https://tesla.com/ns_videos/model-3-social.jpg") no-repeat
    center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: grid;
  place-items: center;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  height: 360px;
`;

export const Text = styled.div`
  text-align: center;
  flex: 1;

  h1 {
    color: #393c41;
    font-weight: 500;
    font-size: 38px;
  }
  h4 {
    font-weight: 400;
    font-size: 15px;
    color: #5c5e62;
    span {
      padding-bottom: 4px;
      padding-top: 15px;
      border-bottom: 1px solid black;
      color: #393c41;
      cursor: pointer;

      &:hover {
        border-bottom-width: 2px;
        color: black;
      }
    }
  }
`;

export const Actions = styled.div`
  margin-top: 330px;
  display: flex;
  gap: 20px;

  button {
    cursor: pointer;
    border: none;
    width: 260px;
    padding-top: 12px;
    padding-bottom: 12px;
    border-radius: 50px;
    text-transform: uppercase;
    font-weight: 600;
    outline: none;
  }
`;

export const PrimaryButton = styled.button`
  background-color: #393c41;
  color: white;
  opacity: 0.9;
`;

export const SecondaryButton = styled.button`
  background-color: white;
  color: black;
  opacity: 0.8;
`;
