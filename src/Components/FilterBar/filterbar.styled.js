import  styled from 'styled-components';

export const FilterbarContainer = styled.div`
    padding: 20px 40px;
    max-width: 400px;
`

export const FilterCategory = styled.div`
    margin: 20px 0;
`

export const FilterCategoryHeader = styled.h4`
    font-size: 18px;
    border-bottom: 1px solid lightgray;
    letter-spacing: 0.1em;
`

export const FilterCategoryChoice = styled.div`
    padding: 0 40px;
    margin: 10px 0;
    display: flex;
    align-items: center;
`

export const FilterChoice = styled.input`
    cursor: pointer;
    margin-right: 7px;
`

export const FilterChoiceLabel = styled.span`
    text-transform: capitalize;
    font-size: 14px;
`
export const FilterCategoryChoiceC = styled.div`
    padding: 0 40px;
    margin: 10px 0;
    display: flex;
    align-items: center;
    flex-direction: column;
`

export const FilterPrice = styled.input`
    margin-bottom: 40px;
    padding: 5px 10px;
    width: 70%;
`

export const FilterPriceSlider = styled.input`
    -webkit-appearance: none;
    width: 100%;
    height: 6px;
    border-radius: 15px;
    background: lightgray;
    outline: none;
    transition: all 0.3s ease;

    &::-webkit-slider-thumb{
        -webkit-appearance: none;
        appearance: none;
        width: 18px;
        height: 18px;
        transform: rotate(45deg);
        border-radius: 4px;
        background: #333;
        cursor: pointer;
        transition: all 0.3s ease;
    }

    &::-webkit-slider-thumb:hover{
        transform: scale(1.2, 0.9);
    }
`
