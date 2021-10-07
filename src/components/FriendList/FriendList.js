import PropTypes from "prop-types";
import FriendListItem from "./FriendListItem";
import "./Friendlist.css";

function FriendList({ friends }) {
  return (
    <ul className="FriendList">
      {friends.map((friend) => (
        <FriendListItem
          friend={friend}
          key={friend.id}
          friendAvatar={friend.avatar}
          friendName={friend.name}
          friendIsOnline={friend.isOnline}
          friendId={friend.id}
        />
      ))}
    </ul>
  );
}

FriendListItem.propTypes = {
  friendName: PropTypes.string.isRequired,
  friendAvatar: PropTypes.string.isRequired,
  friendIsOnline: PropTypes.bool.isRequired,
  friendId: PropTypes.number.isRequired,
};

export default FriendList;
