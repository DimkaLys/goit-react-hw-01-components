import PropTypes from "prop-types";
import "./Profile.css";

export function Profile({
  userName,
  userTag,
  userLocation,
  userAvatar,
  userStats,
}) {
  return (
    <section className="Profile">
      <div className="card">
        <div className="description">
          <img src={userAvatar} alt={userName} className="avatar" />
          <p className="name">{userName}</p>
          <p className="tag">@{userTag}</p>
          <p className="location">{userLocation}</p>
        </div>

        <ul className="stats">
          <li className="stats__item">
            <span className="stats__label">Followers</span>
            <span className="stats__quantity">{userStats.followers}</span>
          </li>
          <li className="stats__item">
            <span className="stats__label">Views</span>
            <span className="stats__quantity">{userStats.views}</span>
          </li>
          <li className="stats__item">
            <span className="stats__label">Likes</span>
            <span className="stats__quantity">{userStats.likes}</span>
          </li>
        </ul>
      </div>
    </section>
  );
}

Profile.propTypes = {
  userName: PropTypes.string.isRequired,
  userTag: PropTypes.string.isRequired,
  userLocation: PropTypes.string.isRequired,
  userAvatar: PropTypes.string.isRequired,
  userStats: PropTypes.objectOf(PropTypes.number.isRequired),
};
export default Profile;
