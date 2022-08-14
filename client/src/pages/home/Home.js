import { useEffect, useState } from "react";
import axios from "axios";

//styles
import "./Home.css";

//components
import List from "../../components/list/List";

export default function Home() {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    const getTrips = async () => {
      try {
        const res = await axios.get("/trips/");
        setTrips(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getTrips();
  }, []);
  return (
    <div className='home'>
      <div className='list'>
        {trips.map((trip) => (
          <List key={trip._id} trip={trip} />
        ))}
      </div>
    </div>
  );
}
