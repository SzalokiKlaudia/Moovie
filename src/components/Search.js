import { useState } from "react"

function Search({ setSearchValue }){
    const [ inputValue, setInputValue ] = useState("")
    return(
        <div className="flex">
            <input type="text" 
                className="search rounded-l-[0.7rem]"
                placeholder="Search movies..."
                value={inputValue}  
                onChange={(e) => setInputValue(e.target.value)}      
            />
            <div className="w-20 flex items-center bg-[var(--color-primary-light)] rounded-r-[0.7rem] justify-center cursor-pointer"
            onClick={(e) => setSearchValue(inputValue)}>
                <span 
                role="img"
                className="block text-[2.5rem]">
                🔎
                </span>
            </div>
        </div>
    )
}
export default Search