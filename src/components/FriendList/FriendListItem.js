import { Card, Status, AvatarFriend, NameFriend } from './FriendListItem.styled';
export default function FriendListItem ({ avatar, name, isOnline }) {
  return (
    <Card eventType={isOnline}>
      <Status className="status" isOnline={isOnline}></Status>
      <AvatarFriend src={avatar} alt="User avatar" width="48" />
      <NameFriend>{name}</NameFriend>
    </Card>
  );
};