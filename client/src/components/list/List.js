//styles
import "./List.css";

export default function List() {
  return (
    <ul className='travel-list'>
      <li>
        <p>我即将去....</p>
        <p>当地天气：</p>
        <p>离出发时间还有...</p>
        <p>我需要注意的地方：</p>
        <button>X</button>
      </li>
    </ul>
  );
}
