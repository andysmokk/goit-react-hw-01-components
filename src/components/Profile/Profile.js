import PropTypes from 'prop-types';
import s from './Profile.module.css';

function Profile({
  userAvatarUrl,
  userName,
  userTag,
  userLocation,
  userStats,
}) {
  return (
    <section className={s.Profile}>
      <div className={s.box}>
        <div className={s.description}>
          <img src={userAvatarUrl} alt={userName} className={s.avatar} />
          <p className={s.name}>{userName}</p>
          <p className={s.tag}>@{userTag}</p>
          <p className={s.location}>{userLocation}</p>
        </div>

        <ul className={s.stats}>
          <li className={s.stats__item}>
            <span className={s.stats__label}>Followers</span>
            <span className={s.stats__quantity}>{userStats.followers}</span>
          </li>
          <li className={s.stats__item}>
            <span className={s.stats__label}>Views</span>
            <span className={s.stats__quantity}>{userStats.views}</span>
          </li>
          <li className={s.stats__item}>
            <span className={s.stats__label}>Likes</span>
            <span className={s.stats__quantity}>{userStats.likes}</span>
          </li>
        </ul>
      </div>
    </section>
  );
}

Profile.defaultProps = {
  userLocation: 'Planet Earth',
};

Profile.propTypes = {
  userAvatarUrl: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  userTag: PropTypes.string.isRequired,
  userLocation: PropTypes.string.isRequired,
  userStats: PropTypes.objectOf(PropTypes.number.isRequired),
};

export default Profile;
