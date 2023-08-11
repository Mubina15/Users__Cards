import { useEffect, useState } from 'react';
import './App.css';
import { Loading } from './Components/Pages/Loading/Loading';

function App() {

  const [user, setUser] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUser(data)
        setLoading(false)
      })
      .catch((err) => {
        setLoading(false)
        setError(true)
      })
  }, [])

  return (
    <div className="App">

      {
        loading && <h2><Loading /></h2>
      }

      {
        error && <h2>Error...</h2>
      }

      {
        <div className='container'>
          <ul className='list'>
            {
              user.map((item) => (
                <li className='card' key={item.id}>
                  <h3 className='card__title'>
                    {item.name}
                  </h3>
                  <p className='card__text'>
                    {item.username}
                  </p>
                  <p className='card__text2'>
                    {item.email}
                  </p>
                  <a className='card__link' href='https://jsonplaceholder.typicode.com/users'>
                    More Info
                  </a>
                </li>
              ))
            }
          </ul>
        </div>
      }
    </div>
  );
}

export default App;
