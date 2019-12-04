import React from 'react'
import { Header, Label, Item, Container, Divider } from 'semantic-ui-react'
import { JumboHeader, JumboMessage, Jumbotron } from '../components/StyledComponents'
import Events from './Events'


function Home() {

    return <>
        <Jumbotron fullHeight src="/images/headshot2.jpeg" >
            <JumboMessage  >

                <JumboHeader size="huge" as={"h1"} inverted>Deborah <span style={{ color: "#FFCC51" }}>de</span> Graaff</JumboHeader>
                {/* <JumboHeader size="huge" as={"h1"} inverted>de Graaff</JumboHeader> */}
                {/* <Header.Subheader style={{ color: "white" }} as="h3">Deborah de Graaff</Header.Subheader> */}


            </JumboMessage>
            {/* <Label style={{ alignSelf: "flex-end", justifySelf: "flex-start", color: "white", backgroundColor: "rgba(0,0,0,0)", visibility: "hidden" }} size="big" content="scroll" icon="arrow up" /> */}
        </Jumbotron>

        <Divider hidden />

        <Events />

    </>

}

export default Home