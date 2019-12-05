import React from "react";
import { Header, Label, Item, Container, Divider } from "semantic-ui-react";
import {
  JumboHeader,
  JumboMessage,
  Jumbotron
} from "../components/StyledComponents";
import Events from "./Events";

function Home() {
  return (
    <>
      <Jumbotron right contain fullHeight src='/images/headshot2.jpeg'>
        <JumboMessage>
          <JumboHeader size='huge' as={"h1"} inverted>
            Deborah <span style={{ color: "#FFCC51" }}>de</span> Graaff
          </JumboHeader>
        </JumboMessage>
      </Jumbotron>

      <Divider hidden />

      <Events />

      <Divider hidden />
    </>
  );
}

export default Home;
