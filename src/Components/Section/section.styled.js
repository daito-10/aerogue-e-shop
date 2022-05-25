import styled from 'styled-components';

export const SectionContainer = styled.div`

`

export const ContentDiv = styled.div`
    background-image: url(${({url}) => url});
    width: 100%;
    height: 700px; 
    background-repeat: no-repeat;
    background-position: top left;
    background-size: cover;

`


export const OverlayDiv = styled.div`
   padding: 450px 100px;
   display: flex;
   flex-direction: column-reverse;
`
