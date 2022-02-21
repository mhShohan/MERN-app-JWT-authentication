import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout, reset } from '../features/auth/authSlice';

export default function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const onClick = () => {
    dispatch(logout());
    dispatch(reset());
    navigate('/');
  };
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <h1>MERN GoalSetter</h1>
        </Link>
      </div>
      <ul>
        {user ? (
          <button className="btn" onClick={onClick}>
            <FaSignOutAlt />
            Logout
          </button>
        ) : (
          <>
            <li>
              <Link to="/login">
                <FaSignInAlt />
                Login
              </Link>
            </li>

            <li>
              <Link to="/register">
                <FaUser />
                Register
              </Link>
            </li>
          </>
        )}
      </ul>
    </header>
  );
}
