// import './App.css';
import Profile from './components/Profile';
import user from './user.json';

function App() {
  return (
    <Profile
      avatarUrl={user.avatar}
      userName={user.name}
      tag={user.tag}
      location={user.location}
      stats={user.stats}
    />
  );
}

export default App;
