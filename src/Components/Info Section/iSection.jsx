import React from 'react';
import { ISectionConatiner, ISectionImageDiv, ISectionImage, ISectionMessageDiv, ISectionTextDiv, ISectionTextHeader, ISectionTextPara } from './iSection.style';


const ISection = () => {
    return ( 
        <ISectionConatiner>

            <ISectionImageDiv>
                <ISectionImage src='/images/section-images/iSection.jpg' />
            </ISectionImageDiv>

            <ISectionMessageDiv>
                <ISectionTextDiv>
                    <ISectionTextHeader> OUR GOAL: SUSTAINABILITY </ISectionTextHeader>

                    <ISectionTextPara> 
                        For every product, you have a sustainable packaging material with zero tendency for environmental pollution. Each item you buy is packaged in our zero-plastic, 
                        100% cotton knitted, reusable drawstring bags. It is the ultimate space saver. Foldable and portable, which can be carried around in case of unexpected shopping or trips. 
                        It is also very secure, thanks to the tight knot from the strings. Our drawstring bag can hold your beach essentials, dry shoes for emergencies, gym clothes, 
                        or serve as a toiletry travel kit (hairdryer, brush, oils). The material is easy to care for, machine washable, and will serve for a long time.
                    </ISectionTextPara>

                </ISectionTextDiv>
            </ISectionMessageDiv>

        </ISectionConatiner>
     );
}
 
export default ISection;