import React from 'react';
import { OverlayContainer, OverlayTextDiv, OverlaySubHeader, OverlayHeader, OverlayButtonDiv, Button } from './overlay.styled';
import { useNavigate } from 'react-router-dom';



const Overlay = () => {

    const navigate = useNavigate();

    return ( 
        <OverlayContainer>
            <OverlayTextDiv>
                <OverlaySubHeader> "STEALTH-HOOD" </OverlaySubHeader>
            </OverlayTextDiv>

            <OverlayTextDiv>
                <OverlayHeader> STEALTH HOODIE COLLECTIONS </OverlayHeader>
            </OverlayTextDiv>

            <OverlayButtonDiv>
                <Button onClick={() => navigate('/products')}> SHOP NOW </Button>
            </OverlayButtonDiv>
        </OverlayContainer>
     );
}
 
export default Overlay;
