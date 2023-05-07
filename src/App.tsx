import { useState, useEffect } from 'react'
import { Movie } from './types/Movie'

function App() {

  const [movies, setMovies] = useState<Movie[]> ([])
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    loadMovies()
  }, [])

  const loadMovies = async () => {
    try {
    setLoading(true)
    let response =await fetch ('https://api.b7web.com.br/cinema/')
    let json = await response.json();
    setLoading(false)
    setMovies(json);
   }  catch(e){
      setLoading(false)
     alert('Error!Tente mas tarte')
   }  
  }

  return (
    <div >  
      {loading && movies.length > 0 &&
      <div>Carregando</div>
      } 

      
        {!loading && movies.length > 0 &&
        <>
        <div>Total de filmes: {movies.length}</div>
        <div className='grid grid-cols-6 gap-3 '>
          {movies.map((item, index) => (
            <div key={index}>
              <img src={item.avatar} className='w-200 block ' />
              {item.titulo}
            </div>
          ))}
        </div>

        </>
}

    {!loading && movies.length === 0 && 
    <div>Tente mas tarde novamente </div>
    
    } 
       

     
    </div>
  )
}

export default App
