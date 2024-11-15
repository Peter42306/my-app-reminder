import styled from 'styled-components';

export const MobilePhonesWrapper = styled.div`
    width: 300px;
    height: 500px;
    padding: 15px;
    border: 2px solid grey;
    border-radius: 8px;
    box-sizing: border-box; 
    background-color: #f9f9f9;
    text-align: center;
`;

export const PriceActual = styled.span`
color: red;
font-size: larger;
font-weight: bold;
`;

export const PriceBefore = styled.span`
text-decoration: line-through;
`;

export const AdditionalText = styled.span`
font-weight: bold;
`;