import { useEffect, useState } from 'react';
import './App.css';
import CatImage from './components/CatImage';
import LoadingCircle from './components/LoadingCircle';
import httpClient from './utilities/AxiosClient';

function App() {
  const fallBackUrl = "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg";
  const [catUrl, setCatUrl] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    httpClient.get('https://api.thecatapi.com/v1/images/search').then(({ data }) => {
      if (data?.[0]?.url) {
        setCatUrl(data[0].url)
      }
    }).catch(err => {
      console.log('error : ', err);
    }).finally(() => {
      setLoading(false);
    })
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        {
          loading ? (
            <div className='LoadingBox'>
              Cargando... (No es la mejor API)
              <LoadingCircle />
            </div>
          ) :
            <CatImage src={catUrl || fallBackUrl}>
              <h1 className='CatsText'>FOTO DE UN MICHI</h1>
            </CatImage>
        }
      </header>
    </div>
  );
}

export default App;
