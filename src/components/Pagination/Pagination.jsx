import React from 'react'
import ReactPaginate from 'react-paginate'

const Pagination = ({info, pageNumber, SetpageNumber}) => {
    return (
        <ReactPaginate 
            pageCount={info?.pages}
            className="pagination justify-content-center my-5 gap-3"
            activeClassName="active"
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            nextClassName="page-item"
            previousLevel="Prev"
            nextLabel="Next"
            previousLinkClassName="page-link"
            nextLinkClassName="page-link"
            onPageChange={(data) => (
                SetpageNumber(data.selected + 1)
                
            )}
            forcePage={pageNumber === 1 ? 0 : pageNumber - 1}

        />
    )
}

export default Pagination
