import React, {useState} from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
   const [car , setCar] = useState([])
  function fetchCarHandler(){
     fetch('https://swapi.dev/api/starships/').then((response)=>{
      return response.json();
     }).then((data)=>{
      const transformedCar = data.results.map((carData) =>{
        return {
          id:carData.model,
          title:carData.name,
          openingText: carData.manufacturer,
          releaseData:carData.length
        }
      })
          setCar(transformedCar)
     })
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchCarHandler}> Fetch car data</button>
      </section>
      <section>
        <MoviesList movies={car} />
      </section>
    </React.Fragment>
  );
}

export default App;
