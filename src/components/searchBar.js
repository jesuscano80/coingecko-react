import React from "react";

const SearchBar= ({search, setSearch})=>{
    return(
        <input 
            type="text"
            placeholder="search a Coin "
            className="bg-dark text-light mt-4 text-center"
            onChange={(e)=> setSearch(e.target.value)}
        >
        </input>
    )
}

export default SearchBar;