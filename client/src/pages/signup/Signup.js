import { useState } from "react";
import { useSignup } from "../../hooks/useSignup";

//styles
import "../Form.css";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signup, error, isLoading } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await signup(email, password);
  };

  return (
    <form className='signup' onSubmit={handleSubmit}>
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
        注册
      </button>
      {error && <div className='error'>{error}</div>}
    </form>
  );
};

export default Signup;
