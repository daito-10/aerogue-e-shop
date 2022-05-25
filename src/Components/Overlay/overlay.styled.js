import styled from 'styled-components';

export const OverlayContainer = styled.div`
    padding: 20px;
`

export const OverlayTextDiv = styled.div`
    margin: 10px 0;
`

export const OverlaySubHeader = styled.h4`
    letter-spacing: 0.2em;
    font-size: 12px;
`

export const OverlayHeader = styled.div`
    letter-spacing: 0.2em;
    font-size: 20px;
`

export const OverlayButtonDiv = styled.div`
    margin: 20px 0;
`

export const Button = styled.button`
    color: black;
    border: 2px solid black;
    padding: 10px 20px;
    display: inline-block;
    font-size: 14px;
    letter-spacing: 0.2em;
    cursor: pointer;
    box-shadow: inset 0 0 0 0 black;
    -webkit-transition: ease-out 0.4s;
    -moz-transition: ease-out 0.4s;
    transition: ease-out 0.4s;
    display: flex;
    align-items: center;

    &:hover{
        color: white;
        box-shadow: inset 400px 0 0 0 black;
    }
`