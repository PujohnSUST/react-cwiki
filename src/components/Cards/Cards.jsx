import React from 'react'

const Cards = ({ results}) => {

    let display;
    
    if(results) {
        display = results.map((card) => {
            let {id, image, name, location, status} = card;
            return(
                <div key={id} className="col-4">
                     <div className="mb-4 position-relative border border-secondary">
                        <img src={image} className="img-fluid mb-2 width-100" alt="Avater" />
                        <div className="content py-2 px-2">
                            <h5 className="fs-4 fw-bold mb-3">{name}</h5>
                            <div className="fs-6">Last Location</div>
                            <div className="fs-5">{location.name}</div>
                            {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                        </div>

                        {(() => {
                            if (status === "Alive") {
                                return(
                                    <div className="position-absolute top-0">
                                        <span className="badge bg-success fs-6 m-1">{status}</span>
                                        
                                    </div>
                                )
                            }else if(status === "Dead"){
                                return(
                                    <div className="position-absolute top-0">
                                        <span className="badge bg-danger fs-6 m-1">{status}</span>
                                        
                                    </div>
                                )
                            }else{
                                return(
                                    <div className="position-absolute top-0">
                                        <span className="badge bg-secondary fs-6 m-1">{status}</span>
                                        
                                    </div>
                                )
                            }
                        })()}

                        
                     </div>
                     
                </div>
            );
         
        });
    }else{
        display = "data is not found";
    }

    return (
           <>{display}</>
    )
}

export default Cards
