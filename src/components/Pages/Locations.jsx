import React, {useState, useEffect} from 'react';
import Cards from '../Cards/Cards';
import InputGroupLo from '../Filters/Category/InputGroupLo';

const Locations = () => {

    let [id, setID] = useState(1);
    let [info, setInfo] = useState([]);
    let [results, setResults] = useState([]);
    let {name, type} = info;

    let api = `https://rickandmortyapi.com/api/location/${id}`;

    useEffect (() => {

        (async function (){
            let data = await fetch(api).then((res) => res.json());
            setInfo(data);

            let a = await Promise.all(
                data.residents.map((x) => {
                    return fetch(x).then((res) => res.json());
                })
                
            )

            setResults(a);
            

        })();


    },[api])
    return (
        <div className='container mt-4'>
            <div className="row">
                <h1 className='text-center'>Location : <span className="text-primary fw-bold fs-1">{name === "" ? "Unknown" : name}</span></h1>
                <h5 className='text-center'>Type : <span className="text-primary fw-bold">{type === "" ? "Unknown" : type}</span> </h5>
            </div>
            <div className="row">
                <div className="col-3">
                    <InputGroupLo name="Location" total={126} setID={setID}/>
                </div>
                <div className="col-9">
                    <div className="row mt-4">
                        <Cards results={results}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Locations
