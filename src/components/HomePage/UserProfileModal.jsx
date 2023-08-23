import { Link } from "react-router-dom";
import useAuth from "../LoginPage/useAuth"

function UserProfileModal({ handler }) {
  const { logout } = useAuth();

  const handleLogoutClick = () => {
    logout();
  };
  return (
    <div className="HomeUserProfile-upload">
      <Link to="/profilepage" onClick={handler}>
        Go to Profile
      </Link>
      <Link to="" onClick={handleLogoutClick}>
        Log out
      </Link>
    </div>
  );
}

export default UserProfileModal;
