import axios from "axios";
import { useState } from "react";
import { useTripsContext } from "../../hooks/useTripsContext";
import { useAuthContext } from "../../hooks/useAuthContext";

//styles
import "./Create.css";

export default function Create() {
  const { user } = useAuthContext();
  const { dispatch } = useTripsContext();
  const [destination, setDestination] = useState("");
  const [departureTime, setDepartureTime] = useState("");
  const [notes, setNotes] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      setError("您需要先登录");
      return;
    }

    try {
      const trip = { destination, departureTime, notes };
      const res = await axios.post("/trips/", trip, {
        headers: {
          Authorization: `Bearer ${user.data.token}`,
        },
      });
      setDestination("");
      setDepartureTime("");
      setNotes("");
      setError(null);
      dispatch({ type: "CREATE_TRIP", payload: res.data });

      console.log(res.data, "data added to mongodb");
    } catch (error) {
      setError(error);
    }
  };
  return (
    <form className='form' onSubmit={handleSubmit}>
      <label>
        <span>目的地：</span>
        <input
          type='text'
          required
          onChange={(e) => setDestination(e.target.value)}
          value={destination}
        />
      </label>
      <label>
        <span>启程日期：</span>
        <input
          type='date'
          required
          onChange={(e) => setDepartureTime(e.target.value)}
          value={departureTime}
        ></input>
      </label>
      <label>
        <textarea
          placeholder='注意事项'
          onChange={(e) => setNotes(e.target.value)}
          value={notes}
        />
      </label>

      <button className='btn'>添加行程</button>
      {error && <div className='error'>{error}</div>}
    </form>
  );
}
