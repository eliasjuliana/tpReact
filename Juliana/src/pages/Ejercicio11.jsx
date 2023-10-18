import { useEffect, useState } from "react";
import NewsForm from "../Components/Ejercicio11/NewsForm"
import NewsGallery from "../Components/Ejercicio11/NewsGallery"

const newsUrl = import.meta.env.VITE_NEWS_URL

const fetchNews = async (category)=>{
  let url = newsUrl;

  if(category){
    url+= `&category=${category}`
  }
  console.log(url)
  try{
    const response = await fetch(url);
    const data = await response.json();
    const newsArray = data.results;
    console.log(newsArray);
    return newsArray;
  } catch(e) {
    console.error(e);
    return null
  }
}

const Ejercicio11 = () => {

    const [news, setNews] = useState([]);
    // const [filteredNews, setFilteredNews] = useState([]);


    useEffect(()=>{
      fetchNews().then((newsArray)=>{setNews(newsArray)});
    },[]);

    const handleChange = (e) =>{
      const category = e.target.value;

      fetchNews(category).then((newsArray)=>{setNews(newsArray)});
  };


    return (
      <div className='container-fluid exercise-container'>
        <h1 className="text-center mt-5">Noticias</h1>
        <div>

        </div>
        <NewsForm handleChange={handleChange}/>
        <NewsGallery news={news}/>
      </div>
    )
}

export default Ejercicio11