import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import Filters from './components/Filters/Filters';
import Cards from './components/Cards/Cards';
import Pagination from './components/Pagination/Pagination';
import Search from './components/Search/Search';

function App() {

  let [ pageNumber, SetpageNumber] = useState(1);
  
  let [search, setSearch] = useState("");
  let [status, setStatus] = useState("");

  let [fetchedData, updateFetchedData] = useState([]);
  let {info, results} = fetchedData;

  console.log(results);

  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}`;

  useEffect (() => {

    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
    })()

  }, [api]);


  return (
    <div className="container my-4">
      <div className="row">
        <div className="col text-center my-3">
           <h1>Rick and Morty API</h1>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
            <Search setSearch={setSearch}/>
        </div>
      </div>


      <div className="row">
        <div className="col-3">
            <Filters setStatus={setStatus} SetpageNumber={SetpageNumber}/>
        </div>

        <div className="col-9">
            <div className="row">
            <Cards results={results} />
            </div>
        </div>        
      </div>

      <div className="row">
          <Pagination info={info}  pageNumber={ pageNumber } SetpageNumber={ SetpageNumber }/>
      </div>

    </div>
  );
}

export default App;
