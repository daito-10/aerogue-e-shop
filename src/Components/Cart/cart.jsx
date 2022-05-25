import React from 'react';
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai"
import {  MdArrowForwardIos, MdArrowBackIosNew } from "react-icons/md";
import { Button } from '../Overlay/overlay.styled';
import { CartContainter, CartTitle, CartTable, CartHeaderDiv, CartHeaderB, CartHeader, CartProduct, CartProductBDiv, CartProductImage, CartProductDescriptionDiv, 
    CartProductDescription, CartProductSubDescription, CartProductDataDiv, ProductData, CartProductQuantityDiv, ProductQuantity,
    CartTotalDiv, CartTotalDetails, CartTotal, CartButtonDiv  } from './cart.styled';

    
const CartSlice = () => {
    return ( 
        <CartContainter>
            <CartTitle> SHOPPING BAG </CartTitle>
            
            <CartTable>
                <CartHeaderDiv> 
                    <CartHeaderB>PRODUCT</CartHeaderB>
                    <CartHeader>PRICE</CartHeader>
                    <CartHeader>QUANTITY</CartHeader>
                    <CartHeader>TOTAL</CartHeader>
                </CartHeaderDiv>

                <CartProduct>
                    <CartProductBDiv>
                        <CartProductImage src='/images/products/product-1.jpg' />
                        <CartProductDescriptionDiv>
                            <CartProductDescription> AEROGUE STEALTH SWEATSHIRT </CartProductDescription>
                            <CartProductSubDescription> SIZE: S / COLOR: BEIGE </CartProductSubDescription>
                            
                        </CartProductDescriptionDiv>
                    </CartProductBDiv>

                    <CartProductDataDiv>
                        <ProductData> Dhs. 299 </ProductData>
                    </CartProductDataDiv>

                    <CartProductQuantityDiv>
                        
                        <AiOutlineMinus />
                        <ProductQuantity> 1 </ProductQuantity>
                        <AiOutlinePlus />
                        
                    </CartProductQuantityDiv>

                    <CartProductDataDiv>
                        <ProductData> Dhs. 299 </ProductData>
                    </CartProductDataDiv>

                </CartProduct>

                

                <CartTotalDiv>
                    <CartTotalDetails>

                        <CartTotal>Grand Total Amount: <b> Dhs. 299 </b> </CartTotal>

                        <CartButtonDiv>
                            <Button> Check out <MdArrowForwardIos /></Button>
                        </CartButtonDiv>

                        <CartButtonDiv>
                             <Button> <MdArrowBackIosNew /> Continue Shopping  </Button>
                        </CartButtonDiv>
                        
                    </CartTotalDetails>
                        
                </CartTotalDiv>

            </CartTable>
        </CartContainter>
     );
}
 
export default CartSlice;