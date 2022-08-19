import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuthContext } from "../../hooks/useAuthContext";
import moment from "moment";
import "moment/locale/zh-cn";
//styles
import WeatherCard from "../../components/weather/WeatherCard";
import "./Detail.css";

moment.locale("zh-cn");

export default function Detail() {
  const { user } = useAuthContext();
  const [detail, setDetail] = useState({});
  const [weather, setWeather] = useState({});
  const [dday, setDday] = useState("");
  const { id } = useParams();

  useEffect(() => {
    const getDetail = async () => {
      try {
        const res = await axios.get(`/trips/${id}`, {
          headers: {
            Authorization: `Bearer ${user.data.token}`,
          },
        });
        setDetail(res.data.trip);
        setWeather(res.data.weatherData);

        const dDay = () => {
          const departureTime = new Date(res.data.trip.departureTime);
          const today = new Date();
          const Difference_In_Time = departureTime.getTime() - today.getTime();
          const Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
          setDday(Math.floor(Difference_In_Days));
        };
        dDay();
        console.log(res.data.weatherData);
      } catch (error) {
        console.log(error);
      }
    };

    // const dDay = () => {
    //   const today = new Date();
    //   const departureTime = detail.departureTime;
    //   console.log(departureTime);
    //   // const Difference_In_Time = departureTime.getTime() - today.getTime();
    //   // const Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
    //   // setDday(Difference_In_Days);
    // };
    if (user) {
      getDetail();
    }
  }, [id, user]);

  return (
    <div>
      {!detail && <div>isLoading</div>}
      {detail && weather?.main && (
        <div>
          <WeatherCard detail={detail} weather={weather} />
          <div className='detail-card'>
            <p id='d-day'>D-{dday}</p>
            <div className='details'>
              <div className='text'>
                <h2 className='page-title'>去向{detail.destination}的旅程</h2>
                <p className='detail-label'>
                  出发日期：{moment(detail.departureTime).format("ll")}
                </p>
                <p className='detail-label'>我需要注意的地方：{detail.notes}</p>
              </div>

              <div className='btns'>
                <button className='edit-btn'>编辑</button>
                <button className='delete-btn'>删除</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
