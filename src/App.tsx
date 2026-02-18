import { useState, useEffect } from "react"
import Auth from "./components/auth"
import {db} from "./config/firebase"
import {getDocs, collection} from "firebase/firestore"

interface Movie {
  id : string
  title: string
  receivedAnOscar: boolean
  releaseDate: number
}

function App() {
  const [movieList, setMovieList] = useState<Movie[]>([])

  // New Movie State

  const moviesCollectionRef = collection(db, "movies")
  
  useEffect(() => {
    const getMovieList = async () => {
      try {
        const data = await getDocs(moviesCollectionRef);
        const filteredData = data.docs.map((doc) =>  ({
          ...doc.data() as Omit<Movie, "id">,
          id: doc.id
        }))
        setMovieList(filteredData)
      } catch (err){
        console.error(err)
      }
    };

    getMovieList();
  }, [])

  return (
    <>
      <div>
        <h1>Firebase Project</h1>
        <Auth/>

        <div>
          <input placeholder="Movie title..." />
          <input placeholder="Release Date..." type='number' />
          <input type="checkbox" />
          <label>Received an Oscar?</label>
          <button>Submit Movie</button>
        </div>

        <div>
          {movieList.map((movie) => (
            <div>
              <h1 style={{color : movie.receivedAnOscar ? "green" : 'red'}}>{movie.title}</h1>
              <p> Date: {movie.releaseDate} </p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default App
