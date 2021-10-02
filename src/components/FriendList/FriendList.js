import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';
import s from './FriendList.module.css';

function FriendList({ friends }) {
  return (
    <section className={s.FriendList}>
      <ul>
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
    </section>
  );
}

FriendListItem.propTypes = {
  friendName: PropTypes.string.isRequired,
  friendAvatar: PropTypes.string.isRequired,
  friendStatus: PropTypes.bool.isRequired,
  friendId: PropTypes.number.isRequired,
};

export default FriendList;
