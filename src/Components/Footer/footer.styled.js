import styled from 'styled-components';
import { Link }  from 'react-router-dom';

export const FooterContainer = styled.div`
    padding: 50px 20px;
    padding-bottom: 10px;
    background-color: #f7f7f8;
`
export const FooterTop = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-around;
    border-bottom: lightgray 1px solid;
`

export const FooterDiv = styled.div`
    display: flex;
    flex-direction: column;
`

export const FooterItemHeader = styled.h4`
    margin: 10px 0;
    letter-spacing: 0.2rem;
    font-size: 16px;
`


export const FooterItemDiv = styled.div`
    margin: 5px 0;
`

export const FooterItem = styled(Link)`
    letter-spacing: 0.1rem;
    font-size: 14px;
    cursor: pointer;
    text-decoration: none;
    color: grey;

    &:hover{
        color: black;
    }  
`

export const FooterSubscribeDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const NewsLetterDiv = styled.div`
    display: flex;
    flex-direction: column;
`

export const NewsLetterInput = styled.input`
    padding: 10px 20px;
    font-size: 14px;
    letter-spacing: 2px;
`

export const ButtonDiv = styled.div`
    margin: 20px 0;
`

export const SubButton = styled.button`
    color: black;
    border: 2px solid black;
    padding: 7px 12px;
    display: inline-block;
    font-size: 12px;
    letter-spacing: 0.2em;
    cursor: pointer;
    box-shadow: inset 0 0 0 0 black;
    -webkit-transition: ease-out 0.4s;
    -moz-transition: ease-out 0.4s;
    transition: ease-out 0.4s;

    &:hover{
        color: white;
        box-shadow: inset 400px 0 0 0 black;
    }
`

export const SocialsDiv = styled.div`
    display: flex;
    flex-direction: column;
    margin: 20px 0;
`

export const SocialIconDiv = styled.div`
    display: flex;
    justify-content: space-around;
    margin: 10px 0;
`

export const IconDiv = styled(Link)`
    margin: 0 5px;
    color: #333;
    cursor: pointer;

    &:hover{
        color: black;
    }
`

export const FooterBottom = styled.div`
    padding: 10px 40px 5px 40px;
    display: flex;
    justify-content: space-between;
`

export const CopyrightDiv = styled.div`

`

export const BrandDiv = styled.div`

`

export const FooterText = styled.div`
    font-size: 14px;
    color: #333;
    letter-spacing: 2px;
`





