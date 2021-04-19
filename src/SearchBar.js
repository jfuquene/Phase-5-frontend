import React from 'react'; 

const SearchBar = ({changeFilter, sort, changeSort }) => {

    return(
        <div>
            {/* <strong>Sort by:</strong>
            <label>
                <input type="radio" value="dog" checked={sort === "dog"} onChange={(e) => changeSort(e.target.value)}/>Dog
            </label>
            <label>
                <input type="radio" value="cat" checked={sort === "cat"} onChange={(e) => changeSort(e.target.value)}/>Cat
            </label> */}

            <br/>
            <label>
                <strong>What animal are you looking for:</strong>
                <select onChange={(e) => changeFilter(e.target.value)}>
                    <option value="dog">Dog's</option>
                    <option value="cat">Cat's</option>
                    <option value="All">All Animals</option>
                </select>

            </label>      
        </div>
    )
}

export default SearchBar;