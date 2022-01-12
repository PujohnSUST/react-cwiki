import React, {useState, useEffect} from 'react';
import Cards from '../Cards/Cards';
import InputGroup from '../Filters/Category/InputGroup';

const Episodes = () => {

    let [id, setID] = useState(1);
    let [info, setInfo] = useState([]);
    let [results, setResults] = useState([]);
    let {name, air_date} = info;

    let api = `https://rickandmortyapi.com/api/episode/${id}`;

    useEffect (() => {

        (async function (){
            let data = await fetch(api).then((res) => res.json());
            setInfo(data);

            let a = await Promise.all(
                data.characters.map((x) => {
                    return fetch(x).then((res) => res.json());
                })
                
            )

            setResults(a);
            

        })();


    },[api])

    return (
        <div className='container mt-4'>
            <div className="row">
                <h1 className='text-center'>Episode : <span className="text-primary fw-bold fs-1">{name === "" ? "Unknown" : name}</span></h1>
                <h5 className='text-center'>Air Date : <span className="text-primary fw-bold">{air_date === "" ? "Unknown" : air_date}</span> </h5>
            </div>

            <div className="row mt-5">
                <div className="col-3">
                    <InputGroup name="Episode" setID={setID} total={51}/>
                </div>
                <div className="col-9">
                    <div className="row">
                    <Cards results={results}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Episodes
