import React, { useState } from 'react';
import vid from './asset/earth.mp4';

const Maino = () => {
    const [city, setCity] = useState("");
    const [valid, setValid] = useState(false);
    const [weather, setWeather] = useState({});
    const api = {
        key: '24a876f16e072f9e823f0f370f7d62d1',

    }

    const submito = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            setValid(true);
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api.key}`).then(response => response.json()).then(result => setWeather(result));
            setCity('');
        }
    };



    return (<section>
    <video src={vid} autoPlay loop muted />
        <div className='wholesome'>
            
            <div className="group">
                <svg className="icon" aria-hidden="true" viewBox="0 0 24 24"><g><path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path></g></svg>
                <input placeholder="Search" type="search" className="input" value={city} onKeyPress={submito} onChange={(e) => { setCity(e.target.value) }} required />
            </div>

            {weather.name !== undefined && valid && <>
                <div className='maincontent'>

                    {weather.main ? <h1>{Math.round((weather.main.temp) - 273.15)} &#8451;</h1> : null}
                    <h4>{weather.name}</h4>

                </div>
                <div className='extracontent'>
                    <div>{weather.weather ? <h4>{weather.weather[0].description}</h4> : null} <p>Description</p></div>
                    <div>{weather.main ? <h4>{Math.round((weather.main.feels_like) - 273.15)} &#8451;</h4> : null} <p>Feels like</p></div>
                    <div>{weather.main ? <h4>{weather.main.humidity}</h4> : null} <p>Humidity</p></div>
                </div>
            </>}
            {weather.cod === '404' && valid && <div className='error'><p>Please Enter Valid city</p></div>}

        </div>
    </section>
    )
}
export default Maino;
