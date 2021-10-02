import PropTypes from 'prop-types';

function Profile({
  userAvatarUrl,
  userName,
  userTag,
  userLocation,
  userStats,
}) {
  return (
    <div className="profile">
      <div className="description">
        <img src={userAvatarUrl} alt={userName} className="avatar" />
        <p className="name">{userName}</p>
        <p className="tag">@{userTag}</p>
        <p className="location">{userLocation}</p>
      </div>

      <ul className="stats">
        <li>
          <span className="label">Followers</span>
          <span className="quantity">{userStats.followers}</span>
        </li>
        <li>
          <span className="label">Views</span>
          <span className="quantity">{userStats.views}</span>
        </li>
        <li>
          <span className="label">Likes</span>
          <span className="quantity">{userStats.likes}</span>
        </li>
      </ul>
    </div>
  );
}

Profile.propTypes = {
  userAvatarUrl: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  userTag: PropTypes.string.isRequired,
  userLocation: PropTypes.string.isRequired,
  userStats: PropTypes.objectOf(PropTypes.number.isRequired),
};

export default Profile;
