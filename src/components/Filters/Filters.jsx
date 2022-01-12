import React from 'react';
import Status from './Category/Status';
import Species from './Category/Species';
import Gender from './Category/Gender';

const Filters = ({ setPageNumber, setStatus, setGender, setSpecies}) => {

    let clear = () => {
        setPageNumber("");
        setStatus("");
        setGender("");
        setSpecies("");
        window.location.reload(false);
    };
    
    return (
        <div className='Filters text-center'>
            <h1>Filters</h1>
            <button onClick={clear} className='bg-white border-0 text-primary text-decoration-underline'>Clear Filters</button>

            <div className="accordion mt-4" id="accordionExample">
                <Status setStatus={setStatus} setPageNumber={setPageNumber}/>
                <Gender setGender={setGender} setPageNumber={setPageNumber}/>
                <Species setSpecies={setSpecies} setPageNumber={setPageNumber}/>
                
                
                
            </div>
        </div>





    )
}

export default Filters
