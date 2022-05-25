import React, { useState } from 'react';
import { MdSearch, MdLogin, MdOutlineShoppingBag } from "react-icons/md";
import { FiUser } from 'react-icons/fi'
import { NavbarContainer, NavContainer, NavLogoDiv, NavLogo, NavOptionsContainer, NavOptionDiv, NavCategoryContainer, NavCategory, NavInput, NavLabel } from './navbar.styled';
import { useNavigate } from 'react-router-dom';



const Navbar = () => {

    const navigate = useNavigate();

    return ( 

        <NavbarContainer>

            <NavContainer>

                <NavLogoDiv>
                    <NavLogo src='/aerogue-logo.svg' onClick={() => navigate('/')} />
                </NavLogoDiv>

                <NavCategoryContainer>
                    <NavCategory to='/products'> MEN </NavCategory>
                    <NavCategory to='/products'> WOMEN </NavCategory>
                    <NavCategory to='/products'> STEALTH BY AEROGUE </NavCategory>
                </NavCategoryContainer>


                <NavOptionsContainer>
                    <NavOptionDiv> 
                        <NavInput placeholder='Search' />
                        <MdSearch size={25} onClick={() => navigate('/products')} />  
                    </NavOptionDiv>

                    <NavOptionDiv> <FiUser size={25} onClick={() => navigate('/login')} /> </NavOptionDiv>

                    <NavOptionDiv> 
                        <MdOutlineShoppingBag size={25} onClick={() => navigate('/cart')}  />  
                        <NavLabel />
                    </NavOptionDiv>
                </NavOptionsContainer>

            </NavContainer>

        </NavbarContainer>
     );
}
 
export default Navbar;