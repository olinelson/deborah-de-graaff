import React from "react";
import {
  Embed,
  Container,
  Form,
  Button,
  Header,
  Divider
} from "semantic-ui-react";

import styled from "styled-components";

export default function Contact() {
  const CenteredContainer = styled(Container)`
    height: 100vh;
    display: grid !Important;
    align-content: center !Important;
    justify-content: centers !Important;
  `;

  return (
    <CenteredContainer text>
      {/* <Jumbotron
        style={{
          backgroundImage: `url('https://storage.googleapis.com/inner_wisdom_bucket/ancient-art-asia-302100.jpg') `,
          backgroundPosition: "center"
        }}
      /> */}

      <Form
        inverted
        action='https://formspree.io/olinelson93@gmail.com'
        method='POST'
      >
        <Header as='h1' inverted>
          Contact
        </Header>
        <Form.Input
          required
          label='Full Name'
          name='name'
          placeholder='Mike Nock'
        />
        <Form.Input
          required
          label='Email'
          name='email'
          type='email'
          placeholder='pocket_science@gmail.com'
        />

        <Form.TextArea
          required
          name='message'
          label='Message'
          placeholder='It Was the Best of Times; It Was the Worst of Times...'
        />
        <Button type='submit'>Send</Button>
      </Form>
    </CenteredContainer>
  );
}
