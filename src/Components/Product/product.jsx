import React, { useState } from 'react';
import { ProductContainer, ProductImageDiv, ProductImage, ProductDetailsDiv, ProductSelectDiv, SizeDiv, Size, Select, ColorDiv, Color, Text,
ProductHeader, ProductHeaderText, ProductPriceDiv, ProductPrice } from './product.styled';

import { useNavigate } from 'react-router-dom';


const Product = () => {

    const navigate = useNavigate()

    return (  
        <ProductContainer onClick={() => navigate('/productdetails')}>

            <ProductImageDiv>
                <ProductImage src='/images/products/product-1.jpg' />
            </ProductImageDiv>

            <ProductDetailsDiv>

                <ProductSelectDiv>
                    <Text> SIZE: </Text>
                    <SizeDiv>
                        <Size> S </Size>
                        <Size> M </Size>
                        <Size> L </Size>
                        <Size> XL </Size>
                        <Size> 2XL </Size>
                        <Size> 3XL </Size>
                    </SizeDiv>
                </ProductSelectDiv>


                <ProductSelectDiv>
                    <Text> COLOR: </Text>
                    <ColorDiv>
                        <Select> <Color color={'beige'}>  </Color> </Select>
                        <Select> <Color color={'grey'}>  </Color> </Select>
                    </ColorDiv>
                </ProductSelectDiv>

                <ProductHeader>
                    <ProductHeaderText> STEALTH HOODIE </ProductHeaderText>
                </ProductHeader>

                <ProductPriceDiv>
                    <ProductPrice> AED: 299 </ProductPrice>   
                </ProductPriceDiv>

            </ProductDetailsDiv>

        </ProductContainer>
    );
}
 
export default Product;