import PropTypes from 'prop-types';
import style from './FriendList.module.css';

const FriendList = ({friends}) => {
  return (
    <ul className={style['friend-list']}>
      {friends.map(({ avatar, name, isOnline, id }) => {
        return (
          <li key={id} className={style.item}>
            <span className={isOnline ? style.onLine : style.ofLine}></span>
            <img
              className={style.avatar}
              src={avatar}
              alt="User avatar"
              width="48"
            />
            <p className={style.name}>{name}</p>
          </li>
        );
      })}
    </ul>
  );
};
FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};

export default FriendList;
