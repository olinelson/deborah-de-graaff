import React from "react";
import { Icon } from "semantic-ui-react";
import { FooterContainer } from "./StyledComponents";

export default function Footer() {
  return (
    <FooterContainer>
      <p>
        <Icon name='copyright' />
        Deborah de Graaff {new Date().getFullYear()}
      </p>
    </FooterContainer>
  );
}
