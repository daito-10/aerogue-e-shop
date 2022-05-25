import styled from 'styled-components';
import { Link } from 'react-router-dom'


export const NavbarContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px 40px;
    transition: all 2s ease-in-out;
`

export const NavContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    padding: 20px 0;
`

export const NavLogoDiv = styled.div`
    flex: 1;
    padding: 10px 40px;
`

export const NavLogo = styled.img`
    height: 50px;
    cursor: pointer;

`
export const NavCategoryContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    overflow: hidden;
    padding: 10px 0;
    flex: 2;
`


export const NavCategory = styled(Link)`
    cursor: pointer;
    letter-spacing: 0.2em;
    font-size: 18px;
    font-weight: 500;
    text-decoration: none;
    color: black;
    position: relative;

    &::after{
        content: '';
        width: 100%;
        height: 1px;
        background-color: black;
        border-radius: 4px;
        position: absolute;
        left: 0;
        bottom: 0;
        transform: scaleX(0);
        transform-origin: left;
        transition: transform .25s ease;
    }
    &:hover::after{
        transform: scaleX(1);
    }

    @media screen and (max-width: 768px){
        font-size: 16px;
        margin: 0 20px;
    }
`
export const NavInput = styled.input`
    margin: 0 20px;
    width: 200px;
    padding: 10px;
    font-size: 14px;
    letter-spacing: 2px;
    outline: none;
    border: none;
    border-bottom: 1px solid black;
    transition: all 500ms cubic-bezier(0, 0.110, 0.35, 2);

    &:focus{
        width: 300px;
        background-color: transparent;
        transition: all 500ms cubic-bezier(0, 0.110, 0.35, 2);
    }
`

export const NavOptionsContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    padding: 10px 0;
    flex: 2;
`

export const NavOptionDiv = styled.div`
    padding: 0 20px;
    cursor: pointer;
    display: flex;
    align-items: center;
`

export const NavLabel = styled.span`
    padding: 5px;
    background-color: red;
    border-radius: 50%;
`

