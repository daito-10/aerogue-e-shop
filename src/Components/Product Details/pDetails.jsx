import React from 'react';
import { Button } from '../Overlay/overlay.styled';
import {  MdOutlineShoppingBag } from "react-icons/md";
import { PDetContainer, PDetImagesContainer, PDetImage, PDetDetailContainer, PDetProductHeader, PDetProductPrice, 
    PDetSmallImgDiv, PDetSImage, PDetProductDescription, PDetDiv, PDetText, PDetButtonDiv, PDiv, PDetSizeChart } from './pDetails.styled';
import {Select, Color, SizeDiv, Size } from '../Product/product.styled';


const PDetails = () => {
    return ( 
        <PDetContainer>
            <PDetImagesContainer>

            <PDetSmallImgDiv>
                    <PDetSImage src='/images/products/product-1.jpg' />
                    <PDetSImage src='/images/products/product-1.jpg' />
                    <PDetSImage src='/images/products/product-1.jpg' />
                </PDetSmallImgDiv>

                <PDetImage src='/images/products/product-1.jpg' />
                
            </PDetImagesContainer>

            <PDetDetailContainer>
                <PDetProductHeader> STEALTH HOODIE </PDetProductHeader>
                <PDetProductDescription> Lorem ipsum dolor sit amet consectetur adipisicing elit. Et aut id saepe? Labore libero dicta provident ratione! Earum sapiente at molestiae, praesentium, minus dolor minima temporibus accusantium mollitia sequi quidem ipsam aperiam odio recusandae ullam et, quod expedita quam aspernatur atque. Eius beatae eos aliquam voluptatum tempora voluptatem tenetur modi provident ipsam quas necessitatibus voluptates nostrum molestiae possimus eveniet, minima magni cumque eaque consequuntur! Dolor quisquam enim asperiores ad assumenda? Autem quaerat repudiandae earum! Obcaecati? </PDetProductDescription>

                <PDetProductPrice> Dhs. 299 </PDetProductPrice>

                <PDetDiv>
                   <PDiv>
                        <PDetText> COLORS: </PDetText>
                        <Select> <Color color={'beige'}>  </Color> </Select>
                        <Select> <Color color={'grey'}>  </Color> </Select>
                   </PDiv>
                </PDetDiv>

                <PDetDiv>
                    <PDiv>
                        <PDetText> SIZE: </PDetText>
                        <SizeDiv>
                            <Size> S </Size>
                            <Size> M </Size>
                            <Size> L </Size>
                            <Size> XL </Size>
                            <Size> 2XL </Size>
                            <Size> 3XL </Size>
                        </SizeDiv>
                    </PDiv>

                    <PDiv>
                        <PDetSizeChart> Size Chart </PDetSizeChart>
                    </PDiv>

                </PDetDiv>

                <PDetButtonDiv>
                    <Button> Add to Bag <MdOutlineShoppingBag /> </Button>
                </PDetButtonDiv>
            </PDetDetailContainer>
        </PDetContainer>
     );
}
 
export default PDetails;