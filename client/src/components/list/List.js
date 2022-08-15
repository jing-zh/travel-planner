import axios from "axios";
import { Link } from "react-router-dom";
import { useTripsContext } from "../../hooks/useTripsContext";
import moment from "moment";
import "moment/locale/zh-cn";

//styles
import "./List.css";
moment.locale("zh-cn");

export default function List({ trip }) {
  const { dispatch } = useTripsContext();
  const handleClick = async (e) => {
    try {
      const res = await axios.delete("/trips/" + trip._id);
      dispatch({ type: "DELETE_TRIP", payload: res.data });
      console.log(res, "deleted successfully");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='card'>
      <div className='card-header'>
        <button className='delete-btn' onClick={handleClick}>
          X
        </button>
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
          <strong>出发日期：</strong>
          {moment(trip.departureTime).format("ll")}
        </p>
        <p>
          <strong>创建于：</strong>
          {moment(trip.createdAt).startOf("day").fromNow()}
        </p>
      </div>
    </div>
  );
}
