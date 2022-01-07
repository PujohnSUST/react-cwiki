import React from 'react';
import Status from './Category/Status';
import Species from './Category/Species';
import Gender from './Category/Gender';

const Filters = ({ SetpageNumber, setStatus }) => {
    return (
        <div className='Filters text-center'>
            <h1>Filters</h1>
            <button className='bg-white border-0 text-primary text-decoration-underline'>Clear Filters</button>

            <div className="accordion mt-4" id="accordionExample">
                <Status setStatus={setStatus} SetpageNumber={SetpageNumber}/>
                <Gender />
                <Species />
                
                
                
            </div>
        </div>





    )
}

export default Filters
