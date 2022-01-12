import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import './App.css';
import Filters from './components/Filters/Filters';
import Cards from './components/Cards/Cards';
import Pagination from './components/Pagination/Pagination';
import Search from './components/Search/Search';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Episodes from './components/Pages/Episodes';
import Locations from './components/Pages/Locations';


function App (){
  return (
    <Router>
      <div className='App'>
          <Navbar />
      </div>

      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/episodes" element={<Episodes />}/>
        <Route path="/locations" element={<Locations />}/>
      </Routes>
    </Router>
  )
}

const Home = () =>{

  let [ pageNumber, setPageNumber] = useState(1);
  
  let [search, setSearch] = useState("");
  let [status, setStatus] = useState("");
  let [species, setSpecies] = useState("");
  let [gender, setGender] = useState("");

  let [fetchedData, updateFetchedData] = useState([]);
  let {info, results} = fetchedData;


  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&species=${species}&gender=${gender}`;

  useEffect (() => {

    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
    })()

  }, [api]);


  return (

  <div className='App'>
    
    <div className="container my-4">

      <div className="row">
        <div className="col-12">
            <Search setSearch={setSearch}/>
        </div>
      </div>


      <div className="row">
        <div className="col-3">
            <Filters 
              setSpecies={setSpecies}
              setGender={setGender}
              setStatus={setStatus} 
              setPageNumber={setPageNumber}
            />
        </div>

        <div className="col-9">
            <div className="row">
            <Cards results={results} />
            </div>
        </div>        
      </div>

      <div className="row">
          <Pagination info={info}  pageNumber={ pageNumber } setPageNumber={ setPageNumber }/>
      </div>

    </div>
    </div>

  );
}

export default App;
