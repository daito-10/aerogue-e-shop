
import styled  from 'styled-components';

export const PSectionContainer = styled.div`
    padding: 20px 40px;
    
`
export const PSectionHeader = styled.div`
    margin: 30px auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 30%;
`   

export const PSectionTabDiv = styled.div`
    
    padding: 20px 40px;
`


export const PSectionTab = styled.h4`
    letter-spacing: 0.2em;
    font-weight: 500;
    font-size: 25px;
    cursor: pointer;
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
    
`

export const PItemsContainer = styled.div`
    display: grid;
    gap: 50px 100px;
    grid-template-columns: repeat(4, 1fr);
    place-items: center;
`

export const PSectionButtonDiv = styled.div`
    padding: 40px 10px;
    display: flex;
    justify-content: center;
    text-align: center;
`