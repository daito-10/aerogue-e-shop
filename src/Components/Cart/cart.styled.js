import  styled from 'styled-components';

export const CartContainter = styled.div`
    border-top: 1px solid lightgray;
`

export const CartTitle = styled.div`
    font-size: 30px;
    margin: 20px 0;
    display: flex;
    justify-content: center;
    text-align: center;
    letter-spacing: 0.2rem;
 `   

export const CartTable = styled.div`
    display: flex;
    margin: 0 auto;
    width: 80%;
    flex-direction: column;
`

export const CartHeaderDiv = styled.div`
    display: flex;
    justify-content: space-between;
    font-weight: 500;
    border-bottom: 1px solid lightgray;
    font-size: 20px;
    margin-top: 20px;
`

export const CartHeaderB = styled.div`
    flex: 4;
`

export const CartHeader = styled.div`
    flex: 1;
`

export const CartProduct = styled.div`
    display: flex;
    border-bottom: 1px solid lightgray;
    padding: 20px 0;
    margin: 20px 0;
    align-items: center;
`

export const CartProductBDiv = styled.div`
    flex: 4;
    display: flex;
    align-items: center;
`

export const CartProductImage = styled.img`
    height: 250px;
    object-fit: contain;
    margin: 0 20px 0 0;
`

export const CartProductDescriptionDiv = styled.div`
    cursor: pointer;
`

export const CartProductDescription = styled.div`
    letter-spacing: 0.2em;
    font-weight: 500;
    font-size: 18px;
`

export const CartProductSubDescription = styled.div`
    letter-spacing: 0.2em;
    font-weight: 500;
    font-size: 14px;
    color: gray;
`

export const CartProductDataDiv = styled.div`
    flex: 1;
`

export const ProductData = styled.div`
    font-size: 18px;
    letter-spacing: 0.1em;
    font-weight: 500;
`

export const CartProductQuantityDiv = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 18px;
    font-weight: 500;
`

export const ProductQuantity = styled.div`
    display: flex;
    margin: 0 30px;   
`

export const CartTotalDiv = styled.div`
    display: flex;
    justify-content: flex-end;
    margin: 50px 0 ;
`

export const CartTotalDetails = styled.div`
    text-align: right;
`

export const CartTotal = styled.div`
    font-size: 25px;
    letter-spacing: 0.1em;
    margin: 10px 0;
    border-bottom: 1px solid lightgray;

`
export const CartButtonDiv = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 30px;
`


