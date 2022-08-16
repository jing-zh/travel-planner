import { useEffect } from "react";
import axios from "axios";
import { useTripsContext } from "../../hooks/useTripsContext";
import { useAuthContext } from "../../hooks/useAuthContext";

//styles
import "./Home.css";

//components
import List from "../../components/list/List";

export default function Home() {
  const { trips, dispatch } = useTripsContext();
  const { user } = useAuthContext();

  useEffect(() => {
    const getTrips = async () => {
      try {
        const res = await axios.get("/trips/", {
          headers: {
            Authorization: `Bearer ${user.data.token}`,
          },
        });
        dispatch({ type: "SET_TRIPS", payload: res.data });
      } catch (error) {
        console.log(error);
      }
    };

    if (user) {
      getTrips();
    }
  }, [dispatch, user]);
  return (
    <div className='home'>
      <div className='list'>
        {trips && trips.map((trip) => <List key={trip._id} trip={trip} />)}
      </div>
    </div>
  );
}
