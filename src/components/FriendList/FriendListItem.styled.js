import styled from '@emotion/styled';

export const Card = styled.li`
display: flex;
width: 360px;
padding: 10px 17px;
align-items: center;
gap: 34px;

border: 1px solid #E3E3E3;
background: #FFF;
`;
export const Status = styled.span`
width: 22px;
height: 22px;

  border-radius: 50%;

  background-color: ${({ isOnline }) => (isOnline ? '#43B249' : '#d60505')};
`;

export const AvatarFriend = styled.img`
width: 90px;
height: 88px;
border-radius: 10px;
`;

export const NameFriend = styled.p`
color: #000;
font-size: 32px;
`;