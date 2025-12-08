import { useState } from "react"

function Box( {children} ){
    const [ isOpen, setIsOpen ] = useState(true)

    return(
        <div className="box">
            <button 
            className="btn-toggle"
            onClick={() => setIsOpen((prev) => !prev)}>
                {isOpen ? '➖' : '➕'}
            </button>
            {isOpen ? children : null}
            

        </div>

    )
}
export default Box