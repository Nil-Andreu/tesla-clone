import React, { useEffect } from "react";
import CircularCylinder from "./CircularCylinder.jsx";
import { animate } from "./GsapFunctions.js";

import {Wrap,
  Container,
  Title,
  Line,
  Flex,
  Card,
  Text,
  Subtitle,
  CheckList,
  CheckGroup,
  CheckIcon,
  CheckText,
  } from './WhyComponents.jsx'

// Put the card to be another different component file, and pass data with props: array of the values?

function HowPage() {
  useEffect(() => {
    //Where the fisrt number is the delay of the card, and the second the delay of the list
    animate(3.5, 4.5);
  }, []);

  // The id of the container is for the react scroll
  // Export the card and pass props
  return (
    <Container id="why">
      <CircularCylinder />
      <Wrap>
        <Title className="title">Why Savitar?</Title>
        <Line className="line"></Line>
      </Wrap>
      <Flex>
        <Card className="card1">
          <Subtitle className="subtitle1">Feedback</Subtitle>
          <Text className="paragraph1">
            Our technology is developed always taking into consideration the
            opinion of our customers. You will always have the opportunity to
            share your feedback with us in order to make the product fit better
            on your needs.
          </Text>
          <CheckList className="checklist1">
            <CheckGroup>
              <CheckIcon />
              <CheckText>Constant</CheckText>
            </CheckGroup>
            <CheckGroup>
              <CheckIcon />
              <CheckText>Meaningful</CheckText>
            </CheckGroup>
            <CheckGroup>
              <CheckIcon />
              <CheckText>Interaction</CheckText>
            </CheckGroup>
          </CheckList>
        </Card>
        <Card className="card2">
          <Subtitle className="subtitle2">Agile</Subtitle>
          <Text className="paragraph2">
            We use different agile methodologies to develop our products, this
            way we ensure efficiency and effectivity.
          </Text>
          <CheckList className="checklist2">
            <CheckGroup>
              <CheckIcon />
              <CheckText>SCRUM</CheckText>
            </CheckGroup>
            <CheckGroup>
              <CheckIcon />
              <CheckText>Kanban</CheckText>
            </CheckGroup>
            <CheckGroup>
              <CheckIcon />
              <CheckText>XP</CheckText>
            </CheckGroup>
            <CheckGroup>
              <CheckIcon />
              <CheckText>Lean</CheckText>
            </CheckGroup>
          </CheckList>
        </Card>
        <Card className="card3">
          <Subtitle className="subtitle3">Quality</Subtitle>
          <Text className="paragraph3">
            We always ensure the quality of our applications. This means that
            the UI/UX, scalability and security are the main focus for each
            project. For UI/UX we use Ai and Figma, and for scalability the
            cloud-based technologies are our friend.
          </Text>
          <CheckList className="checklist3">
            <CheckGroup>
              <CheckIcon />
              <CheckText>UX/UI</CheckText>
            </CheckGroup>
            <CheckGroup>
              <CheckIcon />
              <CheckText>Cloud-based</CheckText>
            </CheckGroup>
            <CheckGroup>
              <CheckIcon />
              <CheckText>Security</CheckText>
            </CheckGroup>
          </CheckList>
        </Card>
      </Flex>
    </Container>
  );
}

export default HowPage;


