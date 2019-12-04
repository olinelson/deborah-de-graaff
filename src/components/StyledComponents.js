import styled from 'styled-components'
import { Header } from 'semantic-ui-react'

export const JumboHeader = styled(Header)`
        font-size: 5rem;
        color: white;
        // text-shadow: 1px 1px 1px black;
        width: 100%;
        z-index:3!important;
       

    `

export const Jumbotron = styled.div`
    background-position: right 0% top 0% !important;
    background-size: contain !important;
    background-repeat: no-repeat !important;
     background: ${props => `url('${props.src}')`};
     height: ${props => props.fullHeight ? "85vh !important" : "40vh"};
    display: grid;
}
`
export const JumboMessage = styled.div`
    background-color: rgba(0,0,0,0) !important;
    // align-self: center;
    margin-top: 50vh;
    justify-self: ;
    padding: 2rem;





`