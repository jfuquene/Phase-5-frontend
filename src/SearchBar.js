import React from 'react'; 

const SearchBar = () => {

    return(
        <div>
            <strong>Sort by:</strong>
            <label>
                <input type="radio" value="Alphabetically" checked={null} onChange={null}/>
            </label>        
        </div>
    )
}

export default Searchbar;