import React from 'react';
import Overlay from './../Overlay/overlay';
import { SectionContainer, OverlayDiv, ContentDiv } from './section.styled';


const Section = () => {
    return ( 
        <SectionContainer>

            <ContentDiv url='/images/section-images/section-image-2.jpg'>


                <OverlayDiv>
                    <Overlay />
                </OverlayDiv>
                
            </ContentDiv>
            
        </SectionContainer>
     );
}
 
export default Section;