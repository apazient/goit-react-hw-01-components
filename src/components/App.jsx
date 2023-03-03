import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import FriendList from './FriendList/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import user from 'db/user.json';
import data from 'db/data.json';
import friends from 'db/friends.json';
import transactions from 'db/transactions.json';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'block',
        textAlign: 'center',       
        fontSize: 40,
        color: '#010101',       
        margin: '0 auto',
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
