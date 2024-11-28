const UserMenu = ({ user, onLogout }) => (
  <div className="user-menu">
    <p>Xin chào, {user.username}!</p>
    <button onClick={onLogout}>Đăng xuất</button>
  </div>
);

export default UserMenu;
