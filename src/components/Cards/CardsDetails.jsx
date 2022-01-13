import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


const CardsDetails = ({}) => {
    let {id} = useParams();
    let [fetchedData, updateFetchedData] = useState([]);
    let {name, image, location, origin, gender, species, status} = fetchedData

    let api = `https://rickandmortyapi.com/api/character/${id}`;

    useEffect (() => {
  
    (async function () {
        let data = await fetch(api).then((res) => res.json());
        updateFetchedData(data);
    })()
  
    }, [api]);

    return (
        <div className='container'>
            <div className="row">
                <div className="col-4 offset-sm-4 text-center mt-4">
                    <h2 className='mb-4 text-success fw-bold'>{name}</h2>
                    <img src={image} alt={name} className='mb-4 img-fluid' />
                    <div className="mb-1"><strong>Gender:</strong> {gender}</div>
                    <div className="mb-1"><strong>Species:</strong> {species}</div>
                    <div className="mb-1"><strong>Status:</strong> {status}</div>
                    <div className="mb-1"><strong>Location:</strong> {location?.name}</div>
                    <div className="mb-1"><strong>Origin:</strong> {origin?.name}</div>
                </div>
            </div>
        </div>
    )
}

export default CardsDetails
