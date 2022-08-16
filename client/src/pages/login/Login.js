import { useState } from "react";
import { useLogin } from "../../hooks/useLogin";

//styles

import "../Form.css";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, isLoading } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(email, password);
  };

  return (
    <form className='login' onSubmit={handleSubmit}>
      <label>
        <span>邮箱：</span>
        <input
          type='email'
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </label>
      <label>
        <span>密码：</span>
        <input
          type='password'
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </label>
      <button className='btn' disabled={isLoading}>
        登录
      </button>
      {error && <div className='error'>{error}</div>}
    </form>
  );
};

export default Login;
