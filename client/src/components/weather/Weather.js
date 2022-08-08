//styles
import "./Weather.css";

const Weather = () => {
  return (
    <div className='weather'>
      <div className='top'>
        <div>
          <p className='city'>city</p>
          <p className='weather-description'>description</p>
        </div>
        {/* <img
          alt='weather'
          className='weather-icon'
          src={}
        /> */}
      </div>
      <div className='bottom'>
        <p className='temperature'>20°C</p>
        <div className='details'>
          <div className='parameter-row'>
            <span className='parameter-label'>Details</span>
          </div>
          <div className='parameter-row'>
            <span className='parameter-label'>Feels like</span>
            <span className='parameter-value'>20°C</span>
          </div>
          <div className='parameter-row'>
            <span className='parameter-label'>Wind</span>
            <span className='parameter-value'>speed m/s</span>
          </div>
          <div className='parameter-row'>
            <span className='parameter-label'>Humidity</span>
            <span className='parameter-value'>humidity%</span>
          </div>
          <div className='parameter-row'>
            <span className='parameter-label'>Pressure</span>
            <span className='parameter-value'>pressure hPa</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
