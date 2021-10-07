import "./Friendlist.css";

function FriendListItem({ friend }) {
  const { avatar, name, isOnline } = friend;
  return (
    <li className="FriendListItem">
      <span className={isOnline ? "isOnline" : "isOffline"}></span>
      <img className="friend__avatar" src={avatar} alt={name} width="50" />
      <p className="friend__name">{name}</p>
    </li>
  );
}

export default FriendListItem;
