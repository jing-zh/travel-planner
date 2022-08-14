import { Link } from "react-router-dom";

//styles

import "./Navbar.css";
export default function Navbar() {
  return (
    <header>
      <div className='container'>
        <Link to='/'>
          <h1>主页</h1>
        </Link>
        <Link to='/create'>
          <h1>创建</h1>
        </Link>
      </div>
    </header>
  );
}
