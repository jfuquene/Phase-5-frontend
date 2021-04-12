import React from 'react'; 

const SearchBar = ({changeFilter }) => {

    return(
        <div>
            <strong>Sort Alphabetically:</strong>
            <label>
                <input type="radio" value="Alphabetically" checked={null} onChange={null}/>
            </label>
            <br/>
            <label>
                <strong>filter by:</strong>
                <select onChange={(e) => changeFilter(e.target.value)}>
                    <option value="Dog">Dog's</option>
                    <option value="Cat">Cat's</option>
                    <option value="Horse">Horse</option>
                    <option value="Tiger">Tiger's</option>
                    <option value="All">All Animals</option>
                </select>

            </label>      
        </div>
    )
}

export default SearchBar;