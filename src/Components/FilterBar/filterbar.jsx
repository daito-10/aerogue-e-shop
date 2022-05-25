import React, { useState} from 'react';
import { FilterbarContainer, FilterCategory, FilterCategoryHeader, FilterCategoryChoice, 
    FilterChoice, FilterChoiceLabel, FilterPriceSlider, FilterPrice, FilterCategoryChoiceC  } from './filterbar.styled';


const Filterbar = () => {

    const [price, setPrice] = useState('')

    return ( 
        <FilterbarContainer>

            <FilterCategory>

                {/* CATEGORY */}
                <FilterCategoryHeader> PRODUCT CATEGORY </FilterCategoryHeader>

                <FilterCategoryChoice>
                    <FilterChoice type="checkbox" />
                    <FilterChoiceLabel> MEN</FilterChoiceLabel>
                </FilterCategoryChoice>

                <FilterCategoryChoice>
                    <FilterChoice type="checkbox" />
                    <FilterChoiceLabel> WOMEN </FilterChoiceLabel>
                </FilterCategoryChoice>

            </FilterCategory>

            {/* TYPE */}
            <FilterCategory>
                <FilterCategoryHeader> PRODUCT TYPE </FilterCategoryHeader>

                <FilterCategoryChoice>
                    <FilterChoice type="checkbox" />
                    <FilterChoiceLabel> TOPS </FilterChoiceLabel>
                </FilterCategoryChoice>

                <FilterCategoryChoice>
                    <FilterChoice type="checkbox" />
                    <FilterChoiceLabel> BOTTOMS </FilterChoiceLabel>
                </FilterCategoryChoice>

            </FilterCategory>

            {/* COLOR */}
            <FilterCategory>
                <FilterCategoryHeader> COLOR </FilterCategoryHeader>

                <FilterCategoryChoice>
                    <FilterChoice type="checkbox" />
                    <FilterChoiceLabel> BLUE </FilterChoiceLabel>
                </FilterCategoryChoice>

                <FilterCategoryChoice>
                    <FilterChoice type="checkbox" />
                    <FilterChoiceLabel> GREY </FilterChoiceLabel>
                </FilterCategoryChoice>

                <FilterCategoryChoice>
                    <FilterChoice type="checkbox" />
                    <FilterChoiceLabel> BLACK </FilterChoiceLabel>
                </FilterCategoryChoice>

                <FilterCategoryChoice>
                    <FilterChoice type="checkbox" />
                    <FilterChoiceLabel> WHITE </FilterChoiceLabel>
                </FilterCategoryChoice>

            </FilterCategory>

            {/* SIZE */}
            <FilterCategory>
                <FilterCategoryHeader> SIZE </FilterCategoryHeader>

                <FilterCategoryChoice>
                    <FilterChoice type="checkbox" />
                    <FilterChoiceLabel> S </FilterChoiceLabel>
                </FilterCategoryChoice>

                <FilterCategoryChoice>
                    <FilterChoice type="checkbox" />
                    <FilterChoiceLabel> M </FilterChoiceLabel>
                </FilterCategoryChoice>

                <FilterCategoryChoice>
                    <FilterChoice type="checkbox" />
                    <FilterChoiceLabel> L </FilterChoiceLabel>
                </FilterCategoryChoice>

                <FilterCategoryChoice>
                    <FilterChoice type="checkbox" />
                    <FilterChoiceLabel> XL </FilterChoiceLabel>
                </FilterCategoryChoice>

                <FilterCategoryChoice>
                    <FilterChoice type="checkbox" />
                    <FilterChoiceLabel> 2XL </FilterChoiceLabel>
                </FilterCategoryChoice>

                <FilterCategoryChoice>
                    <FilterChoice type="checkbox" />
                    <FilterChoiceLabel> 3XL </FilterChoiceLabel>
                </FilterCategoryChoice>

            </FilterCategory>
                <FilterCategoryHeader> PRICE </FilterCategoryHeader>

            <FilterCategory>
                <FilterCategoryChoiceC>
                    <FilterPrice value={price} />
                    <FilterPriceSlider type="range" name="rangeInput" min="0" max="1000" />
                </FilterCategoryChoiceC>
            </FilterCategory>

        </FilterbarContainer>
     );
}
 
export default Filterbar;