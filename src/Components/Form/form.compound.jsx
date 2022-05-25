import React from 'react';
import { StyledFormContainer, StyledFormHeader, StyledFormField, StyledFormLabel, 
StyledFormInput, StyledFormButton, StyledFormInfo, StyledFormText, StyledFormLink } from './form.styled';



export const FormContainer = ({children, ...restProps}) => {
    return (
        <StyledFormContainer {...restProps}> {children} </StyledFormContainer>
    );
}

export const FormHeader = ({children, ...restProps}) => {
    return (
        <StyledFormHeader {...restProps}> {children} </StyledFormHeader>
    );
}

export const FormField = ({children, ...restProps}) => {
    return (
        <StyledFormField {...restProps}> {children} </StyledFormField>
    );
}

export const FormLabel = ({children, ...restProps}) => {
    return (
        <StyledFormLabel {...restProps}> {children} </StyledFormLabel>
    );
}

export const FormInput = ({ ...restProps}) => {
    return (
        <StyledFormInput {...restProps} /> 
    )
}

export const FormButton = ({ ...restProps}) => {
    return (
        <StyledFormButton {...restProps} /> 
    )
}

export const FormInfo = ({ ...restProps}) => {
    return (
        <StyledFormInfo {...restProps} /> 
    )
}


export const FormText = ({ ...restProps}) => {
    return (
        <StyledFormText {...restProps} /> 
    )
}


export const FormLink = ({ ...restProps}) => {
    return (
        <StyledFormLink {...restProps} /> 
    )
}

