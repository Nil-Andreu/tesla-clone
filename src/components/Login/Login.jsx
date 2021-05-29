import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Header,
  Logo,
  Language,
  Label,
  Information,
} from "./LoginComponents";

import LanguageOutLinedIcon from "@material-ui/icons/LanguageOutlined";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //Where setemail and password will change the value of them


  return (
    <Container>
      <Header>
        <Logo>
          <Link>
            <img
              src="https://assets.website-files.com/5e8fceb1c9af5c3915ec97a0/5ec2f037975ed372da9f6286_Tesla-Logo-PNG-HD.png"
              alt=""
            />
          </Link>
        </Logo>
        <Language>
          <LanguageOutLinedIcon />
          <span>es-SP</span>
        </Language>
      </Header>
      <Information>
        <h1>Sign In</h1>
        <form>
          <Label htmlFor="email">Email Address</Label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Label htmlFor="email">Password</Label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </form>
        <buttonPrimary name="Sign In" type="submit"></buttonPrimary>
      </Information>
    </Container>
  );
}

// In th eform, the value is important and what we will actually do is for the input register on change the value
// The e.target.value gets the value that the user is putting. The e is for the event, and target is what the event is doing

export default Login;
