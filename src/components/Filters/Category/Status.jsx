import React from 'react'
import FilterBTN from '../FilterBTN';


const Status = ({SetpageNumber, setStatus}) => {

    let statusArray =["Alive", "Dead", "Unknown"];


    return (
        <div className="accordion-item">
        <h2 className="accordion-header" id="headingOne">
        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            Status
        </button>
        </h2>
        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body d-flex flex-wrap justify-content-center gap-3 mb-2">
                {statusArray.map((items,index) => (
                     <FilterBTN SetpageNumber={SetpageNumber} setStatus={setStatus}  key={index} items={items} name="status"/>
                ))}
                
            </div>
        </div>
    </div>
    )
}

export default Status
