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
                <select className='filter' onChange={(e) => changeFilter(e.target.value)}>
                    <option value="Dog">Dog's</option>
                    <option value="Cat">Cat's</option>
                    <option value="Fish">Fish</option>
                    <option value="Turtle">Turtles</option>
                    <option value="Bird">Bird's</option>
                    <option value="All">All Animals</option>
                </select>

            </label>      
        </div>
    )
}

export default SearchBar;