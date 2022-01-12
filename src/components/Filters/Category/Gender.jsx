import React from 'react'
import FilterBTN from '../FilterBTN';

const Gender = ({setPageNumber, setGender}) => {

    let gender = ['Male', 'Female', 'Genderless', "Unknown"];
    return (
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Gender
            </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div className="accordion-body">
                {gender.map((items,index) => (
                    <FilterBTN 
                    setPageNumber={setPageNumber} 
                    task={setGender} 
                    index={index}
                    key={index} 
                    items={items} 
                    name="gender"/>
                ))}
                
            </div>
            </div>
        </div>
    )
}

export default Gender
