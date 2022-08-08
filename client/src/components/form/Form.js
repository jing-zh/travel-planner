import React from "react";

//styles
import "./Form.css";

export default function Form() {
  return (
    <>
      <form>
        <label>
          <span>目的地：</span>
          <input type='text' name='city' required />
        </label>
        <label>
          <span>启程时间：</span>
          <input type='date' required></input>
        </label>
        <label>
          <textarea placeholder='注意事项' />
        </label>

        <button className='btn'>添加行程</button>
      </form>
    </>
  );
}
