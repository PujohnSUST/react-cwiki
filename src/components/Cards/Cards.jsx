import React from 'react'

const Cards = ({ results}) => {

    let display;
    console.log(results);
    
    if(results) {
        display = results.map((x) => {
            // return <div>{x.id} - {x.name} - {x.status}</div>;
            return (<div>this</div>)
        })
    }else{
        display = "data is not found";
    }

    return (
        <div className="col-4">
            {display}
        </div>
    )
}

export default Cards
