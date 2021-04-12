import React from 'react'; 

const SearchBar = ({changeFilter, sort, changeSort }) => {

    return(
        <div>
            <strong>Sort Alphabetically:</strong>
            <label>
                <input type="radio" value="Alphabetically" checked={sort === "Alphabetically"} onChange={(e) => changeSort(e.target.value)}/>
            </label>
            <br/>
            <label>
                <strong>filter by:</strong>
                <select onChange={(e) => changeFilter(e.target.value)}>
                    <option value="dog">Dog's</option>
                    <option value="cat">Cat's</option>
                    <option value="horse">Horse</option>
                    <option value="tiger">Tiger's</option>
                    <option value="All">All Animals</option>
                </select>

            </label>      
        </div>
    )
}

export default SearchBar;