import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';

function FriendList({ friends }) {
  //   console.log(friends);
  return (
    <ul className="friend-list">
      {friends.map(friend => (
        <FriendListItem
          friend={friend}
          key={friend.id}
          friendName={friend.name}
          friendAvatar={friend.avatar}
          friendStatus={friend.isOnline}
          friendId={friend.id}
        />
      ))}
    </ul>
  );
}

FriendListItem.propTypes = {
  friendName: PropTypes.string.isRequired,
  friendAvatar: PropTypes.string.isRequired,
  friendStatus: PropTypes.bool.isRequired,
  friendId: PropTypes.number.isRequired,
};

export default FriendList;
