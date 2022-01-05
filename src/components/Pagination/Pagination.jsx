import React from 'react'

const Pagination = ({pageNumber,SetpageNumber}) => {


    let next = () =>{
        SetpageNumber((x) => x+1)
    }   
    
    
    let prev = () =>{
        
        SetpageNumber((x) => x-1)
    }


    return (
        <div className='container my-5'>
            <div className="row">
                <div className="col">
                    <div className="pagination d-flex justify-align-center">

                    {(() => {
                            if(pageNumber === 1){
                                return <button className="btn btn-primary disabled" onClick={prev}>Previous</button>
                            }else{
                                return <button className="btn btn-primary" onClick={prev}>Previous</button>
                            }
                        })()}

                        


                        <button className="btn btn-primary" onClick={next}>Next</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pagination
