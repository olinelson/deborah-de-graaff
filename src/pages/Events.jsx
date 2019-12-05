import React, { useEffect } from "react";
import { Container, Segment, Header } from "semantic-ui-react";

export default function Events() {
  console.log("events");
  useEffect(() => {
    const script = document.createElement("script");

    script.src = "https://widget.bandsintown.com/main.min.js";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <Container>
      <Header size='huge' inverted>
        Events
      </Header>
      <Segment inverted>
        <a
          class='bit-widget-initializer'
          data-artist-name='Deborah de Graaff'
          data-display-local-dates='false'
          data-display-past-dates='true'
          data-auto-style='false'
          data-text-color='#FFFFFF'
          data-link-color='#ffcc51'
          data-background-color='rgba(0,0,0,0)'
          data-display-limit='15'
          data-display-start-time='false'
          data-link-text-color='#ffffff'
          data-display-lineup='false'
          data-display-play-my-city='true'
          data-separator-color='rgba(124,124,124,0.25)'
        />
      </Segment>
    </Container>
  );
}
