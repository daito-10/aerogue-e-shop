import styled from 'styled-components';
import { Link }  from 'react-router-dom';

export const ProductContainer = styled.div`
    max-width: 350px;
    transition: transform .5s;
    margin: 20px 0;

    &:hover{
        transform: scale(1.03);
    }
`

export const ProductImageDiv = styled.div`
    padding: 10px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 1px solid lightgray;
    cursor: pointer;
`

export const ProductImage = styled.img`
    height: 500px;
    object-fit: contain;
`

export const ProductDetailsDiv = styled.div`
    border-top: 1px solid lightgray;
    border-bottom: 1px solid lightgray;
    padding: 20px 0;
`

export const ProductSelectDiv = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    text-align: center;
    justify-content: center;
    margin-bottom: 10px;

`

export const Text = styled.span`
    letter-spacing: 0.2em;
    font-weight: 500;
    font-size: 16px;
    margin-right: 5px;
`

export const SizeDiv = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: 350px;
    width: 100%;
    font-size: 14px;

`

export const Size = styled.span`
    border: 1px solid lightgray;
    padding: 0 10px;
    cursor: pointer;
    margin-right: 15px;
`

export const ColorDiv = styled.div`
    display: flex;
    justify-content: flex-start;
    max-width: 350px;
    width: 100%;
`

export const Select = styled.div`
    border: 1px solid lightgray;
    padding: 5px;
    margin: 0 10px;
`

export const Color = styled.div`
    background: ${({ color }) => color };
    padding: 8px;
    cursor: pointer;
    border: 1px solid black;
`
export const ProductHeader = styled.div`

`

export const ProductHeaderText = styled.h3`
    letter-spacing: 0.2em;
    font-weight: 500;
    font-size: 18px;
    cursor: pointer;
`

export const ProductPriceDiv = styled.div`
    
`

export const ProductPrice = styled.h4`
    letter-spacing: 0.2em;
    font-weight: 500;
    font-size: 16px;
    cursor: pointer;
`