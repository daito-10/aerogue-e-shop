import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledFormContainer = styled.div`
    padding: 40px 40px;
    margin: 0 auto;
    margin-bottom: 200px;
    width: 25%;
    border: 1px solid lightgray;
`

export const StyledFormHeader = styled.h2`
    font-size: 30px;
    letter-spacing: 0.1em;
    font-weight: 500;
`

export const StyledFormField = styled.div`
    display: flex;
    margin: 40px 0;
    flex-direction: column;
`

export const StyledFormLabel = styled.label`
    font-size: 12px;
    letter-spacing: 0.2em;
    font-weight: 500;
`


export const StyledFormInput = styled.input`
    padding: 15px 20px;
    letter-spacing: 2px;
    border: 1px solid lightgray;
    font-size: 16px;
    outline: none;
`

export const StyledFormButton = styled.button`
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
    width: 25%;
    display: flex;
    justify-content: center;

    &:hover{
        color: white;
        box-shadow: inset 400px 0 0 0 black;
    }
`

export const StyledFormInfo = styled.label`
    margin: 20px 0;
`

export const StyledFormText = styled.label`
    font-size: 14px;
    letter-spacing: 0.1em;
    font-weight: 500;
`

export const StyledFormLink = styled(Link)`
    font-size: 14px;
    letter-spacing: 0.1em;
    font-weight: 500;
    cursor: pointer;
    text-decoration: none;
    color: black;

    &:hover{
        text-decoration: underline;
    }
`