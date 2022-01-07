import React from 'react'

const FilterBTN = ({setStatus, SetpageNumber, name, index, items}) => {
    return (
        <div className='form-check'>
            <div className="singlefilter">
                <input type="checkbox" 
                task={setStatus}
                SetpageNumber={SetpageNumber}
                onClick={() => (
                    setpageNumber()
                )}
                className="btn-check" 
                id="btn-check-outlined" 
                autocomplete="off" 
                name={name}
                id={`${name}- ${index}`}
            
            />
            <label className="btn btn-outline-primary mb-2" for={`${name}-${index}`}>{items}</label> 
            </div>
        </div>
    )
}

export default FilterBTN
