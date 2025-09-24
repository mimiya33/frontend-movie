
import axios from 'axios';
import { useEffect, useState } from "react";

const API_KEY = '873c0bbbc5218b37d179e2dbc68ac905';


function App() {
  const [movies, setMovies] = useState([]);
  const options = {
    method: 'GET',
    url: 'https://api.themoviedb.org/3/movie/now_playing?language=ko-KR&page=20',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NzNjMGJiYmM1MjE4YjM3ZDE3OWUyZGJjNjhhYzkwNSIsIm5iZiI6MTczMzI5MTI2OC42ODQsInN1YiI6IjY3NGZlZDA0ZjA4Zjk1YzY1MjIyYmMwNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Ti-7IGwOB-itpRkRjylHSK8H2zmn7xdVw2KT21-rtbI'
    }
  };

  axios
    .request(options)
    .then(res => setMovies(res.data.results))
    .catch(err => console.error(err));
    console.log(movies);
    

  
  return (
    <div className='p-6'>
      <h1 className='text-2xl font-bold mb-6'>현재 상영중 영화</h1>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6'>{movies.filter((movie) => movie.poster_path)
      .map((el) => (
        <div key={el.id} className='bg-white rounded-xl shadow-md overflow-hidden hover:scale-105 transition'>
          <div><img src={`https://image.tmdb.org/t/p/w200/${el.poster_path}`} alt={el.title} /></div>
          <h3 className='text-sm font-semibold line-clamp-2'>영화제목 : {el.title}</h3>
          <p className="text-xs text-gray-500">개봉일 : {el.release_date}</p>
        </div>
      ))}</div>

    </div>
  )
}

export default App
