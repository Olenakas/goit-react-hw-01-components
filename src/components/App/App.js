import ProfileList from '../Profile/ProfileList';
import Statistics from '../Statistics/Statistics';
import FriendList from '../FriendList/FriendList';

import TransactionHistory from '../TransactionHistory/TransactionHistory'

import users from '../../data/user.json';
import data from '../../data/data.json';
import transactions from '../../data/transactions.json';
import friends from '../..//data/friends.json';
import Container from './App.styled';

export default function App() {
   return (      
      <div>      
         <Container>
            <ProfileList items={users} />
            <Statistics title="Upload stats" stats={data} />
             <FriendList friends={friends} />
            <TransactionHistory items={transactions} />            
         </Container>     
      </div>
   );
}