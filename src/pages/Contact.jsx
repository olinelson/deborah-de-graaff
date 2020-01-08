import React from "react";
import { Container, Form, Button, Header } from "semantic-ui-react";

import styled from "styled-components";
import ContactForm from "../components/ContactForm";

export default function Contact() {
  const CenteredContainer = styled(Container)`
    height: 100vh;
    display: grid !Important;
    align-content: center !Important;
    justify-content: centers !Important;
  `;

  return (
    <CenteredContainer text>
      <ContactForm />
    </CenteredContainer>
  );
}
