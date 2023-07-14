import styled from '@emotion/styled';

export const Wrapper = styled.div` 
  width: 385px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 4px;
  background: #FFF;
  border: 1px solid #DCE3EC;  
`;

export const Title = styled.h2`
display: flex;
padding: 35px 98px;
justify-content: center;
align-items: center;
align-self: stretch;
color: #585C5E;
font-size: 20px;
text-transform: uppercase;
`;

export const List = styled.ul` 
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f3f6f9;
`;

export const Item = styled.li`
  width: 77px;
  height: 77px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  background-color: ${p =>
    `#${Math.floor(Math.random() * 16777215).toString(16)}`};
`;

export const Label = styled.span`
  padding: 5px;
  font-size: 16px;
  font-weight: 500;
  color: #303030;
`;

export const Percentage = styled.span`
  padding: 5px;
  font-size: 20px;
  font-weight: 500;
`;