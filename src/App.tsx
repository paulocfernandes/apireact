import { useState } from 'react'
import { Movie } from './types/Movie'

function App() {

  const [movies, setMovies] = useState<Movie[]> ([])

  const handleload = () => {
   fetch ('https://api.b7web.com.br/cinema/')
   .then((response)=> {
    return response.json()
   } )

  .then((jason) => {
    setMovies(jason);
  })
  }

  return (
    <div >
      
        <button className='block bg-blue-400 p-4' onClick={handleload}>Carregar Filmes </button>
        Total de filmes: {movies.length}

        <div className='grid grid-cols-6 gap-3 '>
          {movies.map((item, index) => (
            <div key={index}>
              <img src={item.avatar} className='w-200 block ' />
              {item.titulo}
            </div>

          ))}
        </div>

     
    </div>
  )
}

export default App
