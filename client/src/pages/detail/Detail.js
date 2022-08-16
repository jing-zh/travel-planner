import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuthContext } from "../../hooks/useAuthContext";
//styles
import WeatherCard from "../../components/weather/WeatherCard";
import "./Detail.css";

export default function Detail() {
  const { user } = useAuthContext();
  const [detail, setDetail] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const getDetail = async () => {
      try {
        const res = await axios.get(`/trips/${id}`, {
          headers: {
            Authorization: `Bearer ${user.data.token}`,
          },
        });
        setDetail(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    if (user) {
      getDetail();
    }
  }, [id, user]);

  return (
    <>
      <WeatherCard detail={detail} />
      <div className='detail-card'>
        <div className='details'>
          <h2 className='page-title'>去向{detail.destination}的旅程</h2>
          <p className='detail-label'>距离出发时间还有</p>
          <p className='detail-label'>{detail.destination}今日的天气：</p>
          <p className='detail-label'>我需要注意的地方：{detail.notes}</p>
        </div>
        <div className='btns'>
          <button className='edit-btn'>编辑</button>
          <button className='delete-btn'>删除</button>
        </div>
      </div>
    </>
  );
}
