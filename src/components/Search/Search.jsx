 import React from 'react';
 import styles from './Search.module.scss';

 
 const Search = ({setSearch}) => {

     return (
        <form 

        onChange={(e) => (
            setSearch(e.target.value)
        )}

        className={`${styles.searchForm} d-flex justify-content-center gap-4 mb-4 align-items-center searchForm`}>
            <input type="text"  placeholder='Search  your characters' className='form-control' />
            <button className="btn btn-primary">Search</button>
        </form>
     )
 }
 
 export default Search
 