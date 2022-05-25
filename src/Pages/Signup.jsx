import React from 'react';
import { useNavigate } from 'react-router-dom';
import { NavContainer, NavLogoDiv, NavLogo } from '../Components/Navbar/navbar.styled';
import { FormContainer, FormHeader, FormField, FormLabel, FormInput, FormButton, FormInfo, FormText, FormLink } from '../Components/Form/form.compound';
import Footer from './../Components/Footer/footer';


const Signup = () => {

    const navigate = useNavigate();

    return ( 
        <>

            <NavContainer>
                <NavLogoDiv>
                    <NavLogo src='/aerogue-logo.svg' onClick={() => navigate('/')} />
                </NavLogoDiv>
            </NavContainer>


            <FormContainer>

                <FormHeader> SIGN UP </FormHeader>

                <FormField>
                    <FormLabel>NAME</FormLabel>
                    <FormInput />
                </FormField>

                <FormField>
                    <FormLabel>EMAIL</FormLabel>
                    <FormInput />
                </FormField>

                <FormField>
                    <FormLabel>PASSWORD</FormLabel>
                    <FormInput />
                </FormField>

                <FormField>
                    <FormButton> SIGNUP </FormButton>
                </FormField>

                <FormInfo>
                    <FormText> Already have an account? <FormLink to='/login'> Login </FormLink> </FormText>
                </FormInfo>

            </FormContainer>


            <Footer />
        </>
     );
}
 
export default Signup;