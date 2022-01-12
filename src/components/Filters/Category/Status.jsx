import React from 'react'
import FilterBTN from '../FilterBTN';


const Status = ({setPageNumber, setStatus}) => {

    let status =["Alive", "Dead", "Unknown"];


    return (
        <div className="accordion-item">
        <h2 className="accordion-header" id="headingOne">
        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            Status
        </button>
        </h2>
        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body d-flex flex-wrap justify-content-center gap-3 mb-2">
                {status.map((items, index) => (
                    <FilterBTN 
                    setPageNumber={setPageNumber} 
                    task={setStatus}  
                    index={index} 
                    key={index}
                    items={items} 
                    name="status"/>
                ))}
                
            </div>
        </div>
    </div>
    )
}

export default Status
