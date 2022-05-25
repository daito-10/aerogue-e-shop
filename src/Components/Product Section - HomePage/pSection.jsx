import React from 'react';
import Product from './../Product/product';
import { IoIosArrowForward } from "react-icons/io";
import { Button } from '../Overlay/overlay.styled';
import { PSectionContainer, PItemsContainer, PSectionTabDiv, PSectionTab, PSectionHeader, PSectionButtonDiv } from './pSection.styled';
import { useNavigate } from 'react-router-dom';


const PSection = () => {

    const navigate = useNavigate();
    return ( 
        <PSectionContainer>
            <PSectionHeader>

                <PSectionTabDiv>
                    <PSectionTab> MEN </PSectionTab>
                </PSectionTabDiv>

                <PSectionTabDiv>
                    <PSectionTab> WOMEN </PSectionTab>
                </PSectionTabDiv>

        
            </PSectionHeader>

            <PItemsContainer>
                <Product />
                <Product />
                <Product />
                <Product />
            </PItemsContainer>

            <PSectionButtonDiv>
                <Button onClick={() => navigate('/products')}> View More <IoIosArrowForward /> </Button>
            </PSectionButtonDiv>


        </PSectionContainer>
     );
}
 
export default PSection;