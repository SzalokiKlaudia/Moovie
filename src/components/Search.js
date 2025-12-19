import { useEffect, useRef, useState } from "react"

function Search({ setSearchValue }){
    const [ inputValue, setInputValue ] = useState("")
    const inputeEl = useRef(null)

    useEffect(() => {

        function callback(e){
    
          if(document.activeElement === inputeEl.current) {//currently being focused element input
            return
          }
          if(e.code === 'Enter'){
            inputeEl.current.focus()
            setInputValue('')
    
          }
    
        }
    
        document.addEventListener('keydown',callback)
        return () => document.addEventListener('keydown',callback)
    
      },[setInputValue])

    return(
        <div className="flex">
            <input type="text" 
                className="search rounded-l-[0.7rem]"
                placeholder="Search movies..."
                value={inputValue}  
                onChange={(e) => setInputValue(e.target.value)}      
                ref={inputeEl}
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