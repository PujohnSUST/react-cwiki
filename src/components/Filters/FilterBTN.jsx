import React from 'react';
import styles from './Filter.module.scss';


const FilterBTN = ({task, setPageNumber, name, index, items}) => {
    return (
        <div className='form-check'>
            <div className="singleFilter">
                <input 
                onClick={() => {
                    setPageNumber(1);
                    task(items);
                }}
                type="radio" 
                className={`${styles.x} form-check-input`}
                name={name}
                id={`${name}-${index}`}
            
            />
            <label className="btn btn-outline-primary mb-2" 
                htmlFor={`${name}-${index}`}>
                {items}
            </label> 
            </div>
        </div>
    )
}

export default FilterBTN
