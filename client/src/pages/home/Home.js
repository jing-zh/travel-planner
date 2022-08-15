import { useEffect } from "react";
import axios from "axios";
import { useTripsContext } from "../../hooks/useTripsContext";

//styles
import "./Home.css";

//components
import List from "../../components/list/List";

export default function Home() {
  const { trips, dispatch } = useTripsContext();

  useEffect(() => {
    const getTrips = async () => {
      try {
        const res = await axios.get("/trips/");
        dispatch({ type: "SET_TRIPS", payload: res.data });
      } catch (error) {
        console.log(error);
      }
    };
    getTrips();
  }, [dispatch]);
  return (
    <div className='home'>
      <div className='list'>
        {trips && trips.map((trip) => <List key={trip._id} trip={trip} />)}
      </div>
    </div>
  );
}
