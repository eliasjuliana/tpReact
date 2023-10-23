
const WeatherCard = (props) => {

    const {weatherData} = props;
    console.log(weatherData);

    const temperature = weatherData.main.temp;
    const feelsLike = weatherData.main.feels_like;
    const humidity = weatherData.main.humidity;
    const city = weatherData.name;
    const icon = weatherData.weather[0].icon;
    const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`
    // console.log(temperature);
    // console.log(city);
    // console.log(icon);
    // console.log(iconUrl);
    
  return (
    <section className="container m-5 w-50">
    <article className="card mb-3" >
        <div className="row g-0">
            <div className="col-md-4">
                <img src={iconUrl} className="img-fluid rounded-start" alt="..."/>
            </div>
            <div className="col-md-8">
                <div className="card-body">
                    <p className="card-text">{city}</p>
                    <h2 className="card-title">{temperature}°C</h2>
                    <p className="card-title">Sensacion termica: {feelsLike}°C</p>
                    <p className="card-text"><small className="text-body-secondary">Humedad: {humidity}%</small></p>
                </div>
            </div>
        </div>
    </article>
    </section>
  )
}

export default WeatherCard