// import { toast } from "sonner";
import { useMutation, useQuery } from "@tanstack/react-query";
import WeatherCard from "../Components/Ejercicio13/WeatherCard";
import WeatherForm from "../Components/Ejercicio13/WeatherForm";
import { toast } from "sonner";


const getWeatherFn = async (location) =>{
  let url = import.meta.env.VITE_WEATHER_URL;
  const apiID = import.meta.env.VITE_WEATHER_ID;
  let cityName = location;

  if(cityName){
    url+=`q=${cityName}&appid=${apiID}&units=metric`
  }

  // console.log(url)
  const response = await fetch(url);
  const data = await response.json();
  console.log(data)

  if (!response.ok) {
    throw new Error('Network response was not ok')
  }

  return data;
};

// getWeatherFn()

const Ejercicio13 = () => {

  // const {data: weatherData, isLoading, isError} = useQuery({ queryKey: ['weatherData'], queryFn: getWeatherFn});

  const {mutate: getWeather, data: weatherData, isError} = useMutation({mutationFn: getWeatherFn})

  if(isError){
    toast.error("Ocurrio un error")
  }



  return (
    <>
      <WeatherForm getWeather={getWeather}/>
      {weatherData && <WeatherCard weatherData={weatherData}/>}
    </>
  )
}

export default Ejercicio13