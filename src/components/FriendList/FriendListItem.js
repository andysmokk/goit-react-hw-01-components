import s from './FriendList.module.css';

function FriendListItem({ friend }) {
  const { name, avatar, isOnline } = friend;
  return (
    <li className={s.FriendListItem}>
      <span className={isOnline ? s.isOnline : s.isOffline}></span>
      <img className={s.avatar} src={avatar} alt={name} width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
}

export default FriendListItem;
