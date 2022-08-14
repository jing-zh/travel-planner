import { Link } from "react-router-dom";
import { format } from "timeago.js";
//styles
import "./List.css";

export default function List({ trip }) {
  return (
    <div className='card'>
      <div className='card-header'>
        <button className='delete-btn'>X</button>
        <Link to={`/detail/${trip._id}`}>详情</Link>
      </div>
      <div className='card-info'>
        <p>
          <strong>我即将去：</strong>
          {trip.destination}
        </p>
        <p>
          <strong>当地天气：</strong>
        </p>
        <p>
          <strong>出发时间：</strong>.{trip.departureTime}
        </p>
        <p>
          <strong>创建于：</strong>
          {format(trip.createdAt, "zh_CN")}
        </p>
      </div>
    </div>
  );
}
