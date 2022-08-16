import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

//styles

import "./Navbar.css";
export default function Navbar() {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  const handleClick = () => {
    logout();
  };
  return (
    <header>
      <nav className='container'>
        <Link to='/'>
          <span>主页</span>
        </Link>
        <Link to='/create' className='nav-create'>
          <span>创建</span>
        </Link>
        <div className='wrapper'>
          {user && (
            <div>
              <span className='username'>{user.data.email}</span>
              <button onClick={handleClick}>退出</button>
            </div>
          )}
          {!user && (
            <div>
              <Link to='/login'>
                <span>登录</span>
              </Link>
              <Link to='/signup'>
                <span>注册</span>
              </Link>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
