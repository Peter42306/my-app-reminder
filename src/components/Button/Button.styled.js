import styled from 'styled-components';

export const ButtonWrapper = styled.button`
background-color: green;
padding: 10px 30px;
margin: 10px;
cursor: pointer;
color:brown; 
font-size: 16px;
font-weight: bold;
border-radius: 5px;

&:hover{
    background-color: darkblue;
}

&:active{
    background-color: red;
}
`;
