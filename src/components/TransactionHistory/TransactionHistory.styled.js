import styled from '@emotion/styled';
export const Table = styled.table`
  width: 1000px;
  border: 1px solid #DCE3EC;  
`;

export const THead = styled.thead`
  background-color: #00bcd5;
  color: #FFF;
  font-size: 20px;
  text-transform: uppercase
`;

export const TBody = styled.tbody`
color: #415556;
`;

export const Tr = styled.tr`
  &:nth-child(even) {
    background-color: #f3f6f9;
  }
`;

export const Th = styled.th`
  padding: 8px;
`;

export const Td = styled.td`
  padding: 8px;
  text-align: center;
`;