// import './App.css';
import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';
import FriendList from './components/FriendList/FriendList';
import user from './components/Profile/user.json';
import statisticalData from './components/Statistics/statistical-data.json';
import friends from './components/FriendList/friends.json';

function App() {
  return (
    <div>
      <Profile
        userAvatarUrl={user.avatar}
        userName={user.name}
        userTag={user.tag}
        userLocation={user.location}
        userStats={user.stats}
      />
      <Statistics title="Upload stats" stats={statisticalData} />
      <Statistics stats={statisticalData} />
      <FriendList friends={friends} />
    </div>
  );
}

export default App;
