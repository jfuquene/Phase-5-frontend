import React from 'react'; 

const SearchBar = ({changeFilter, sort, changeSort}) => {

    return(
        <div>
            <br/><br/>
            <strong>Sort by Alphabetically Order:</strong>
            <label>
                <input type="radio" value="Alphabetically" checked={sort === "Alphabetically"} onChange={(e) => changeSort(e.target.value)}/>Alphabetically
            </label>
    

            <br/>
            <label>
                <strong>What animal are you looking for:</strong>
                <select className='filter' onChange={(e) => changeFilter(e.target.value)}>
                    <option value="All">All Animals</option>
                    <option value="Dog">Dog's</option>
                    <option value="Cat">Cat's</option>
                    <option value="Fish">Fish</option>
                    <option value="Turtle">Turtles</option>
                    <option value="Bird">Bird's</option>
                
                </select>

            </label>      
        </div>
    )
}

export default SearchBar;