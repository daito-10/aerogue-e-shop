import React from 'react';
import { useNavigate } from 'react-router-dom';
import { NavContainer, NavLogoDiv, NavLogo, NavbarContainer } from '../Components/Navbar/navbar.styled';
import { FormContainer, FormHeader, FormField, FormLabel, FormInput, FormButton, FormInfo, FormText, FormLink } from '../Components/Form/form.compound';
import Footer from './../Components/Footer/footer';


const Login = () => {

    const navigate = useNavigate()

    return ( 
        <>

            <NavbarContainer> 
                <NavContainer>
                    <NavLogoDiv>
                        <NavLogo src='/aerogue-logo.svg' onClick={() => navigate('/')} />
                    </NavLogoDiv>
                </NavContainer>
            </NavbarContainer>


            <FormContainer>

                <FormHeader> LOGIN </FormHeader>

                <FormField>
                    <FormLabel>EMAIL</FormLabel>
                    <FormInput />
                </FormField>

                <FormField>
                    <FormLabel>PASSWORD</FormLabel>
                    <FormInput />
                    <FormLink to='#'>Forgot Password? </FormLink>
                </FormField>

                <FormField>
                    <FormButton> LOGIN </FormButton>
                </FormField>

                <FormInfo>
                    <FormText> Don't have an account? <FormLink to='/signup'> Sign Up </FormLink> </FormText>
                </FormInfo>

            </FormContainer>


            <Footer />
        </>
     );
}
 
export default Login;