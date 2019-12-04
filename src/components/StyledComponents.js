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
    background-position: ${props => props.right ? 'right 15vw top 0% !important' : 'center'};
    background-size: ${props => props.contain ? 'contain !important' : 'cover !important'};
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