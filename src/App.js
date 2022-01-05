import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import Filters from './components/Filters/Filters';
import Cards from './components/Cards/Cards';

function App() {

  let [pageNumber, SetpageNumber] = useState(4);
  let [fetchedData, updateFetchedData] = useState([]);
  let {info, results} = fetchedData;

  console.log(results);

  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}`;

  useEffect (() => {

    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
    })()

  }, [api]);


  return (
    <div className="container my-4">
      <div className="row">
        <div className="col-3">
            <Filters />
        </div>

        <div className="col-9">
            <div className="row">
            <Cards results={results} />
            <Cards  results={results}/>
            <Cards  results={results}/>
            </div>
        </div>        
      </div>

    </div>
  );
}

export default App;
