import React from 'react';
import { PDContainer, PDHeader, PDSortDiv, PDSort, PDSortLabel, PDSortDropdown, PD, PDPaginationDiv, PDPage } from './pDisplay.styled';
import Product from './../Product/product';
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";


const ProductsDisplay = () => {
    return ( 
        <PDContainer>
            <PDHeader> PRODUCTS </PDHeader>

            <PDSortDiv>
                <PDSort>
                    <PDSortLabel> Sort By: </PDSortLabel>

                    <PDSortDropdown> 
                    <option value="">Select</option>
                        <option value="l2h">Price: Low to High</option>
                        <option value="h2l">Price: High to Low</option>
                        <option value="latest">Latest</option>
                    </PDSortDropdown>
                </PDSort>
            </PDSortDiv>

            <PD>
                <Product />
                <Product />
                <Product />
                <Product />

                <Product />
                <Product />
                <Product />
                <Product />


            </PD>

            <PDPaginationDiv>
                <PDPage> <MdArrowBackIosNew /> Previous </PDPage>
                <PDPage> 1 </PDPage>
                <PDPage> 2 </PDPage>
                <PDPage> 3 </PDPage>
                <PDPage> Next <MdArrowForwardIos /> </PDPage>
            </PDPaginationDiv>
        </PDContainer>
     );
}
 
export default ProductsDisplay;