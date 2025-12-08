import useMovieDataContext from "../context/MovieContext"

function Pagination() {
    const { totalPages, currentPage, setCurrentPage } = useMovieDataContext()

    function getNumbers(){
        const pages = []
        const visibleCount = 5 // egyszerre látható oldalak
        let start = Math.floor((currentPage - 1) / visibleCount) * visibleCount + 1
        let end = Math.min(start + visibleCount - 1, totalPages)
      
        for (let i = start; i <= end; i++) {
          pages.push(i)
        }
      
        return pages

    }
 

    function handlePrev() {
        if(currentPage > 1){
            setCurrentPage(prev => prev - 1)
        }
        
    }

    function handleNext() {
        if(currentPage < totalPages){
            setCurrentPage(prev => prev + 1)
            
        }
        
    }

    function onNumbers(number){
        setCurrentPage(number)

    }

    return (
        <div className="container">
        <div className="flex items-center justify-center border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
      
          <a
            href="#"
            onClick={() => setCurrentPage(1)}
            className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
          >
            <span className="sr-only">First</span>
            <svg
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14.78 5.22a.75.75 0 0 1 0 1.06L11.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06L9.47 10.53a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z
                  M8.78 5.22a.75.75 0 0 1 0 1.06L5.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06L3.47 10.53a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z"
              />
            </svg>
          </a>

          <a
            href="#"
            onClick={handlePrev}
            className="relative inline-flex items-center px-2 py-2 text-gray-400 ring-1 ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
          >
            <span className="sr-only">Prev</span>
            <svg
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              className="h-5 w-5"
            >
              <path
                d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z"
                clipRule="evenodd"
                fillRule="evenodd"
              />
            </svg>
          </a>
      
          <ul className="isolate inline-flex -space-x-px rounded-md shadow-sm">
            {getNumbers().map((number) => (
              <li
                key={number}
                className={
                  number === currentPage
                    ? "active"
                    : "inactive"
                }
                onClick={() => onNumbers(number)} //csak kattintásra hívódik meg a fgv()
              >
                {number}
              </li>
            ))}
          </ul>

          <a
            href="#"
            onClick={handleNext}
            className="relative inline-flex items-center px-2 py-2 text-gray-400 ring-1 ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
          >
            <span className="sr-only">Next</span>
            <svg
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              className="h-5 w-5"
            >
              <path
                d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                clipRule="evenodd"
                fillRule="evenodd"
              />
            </svg>
          </a>

          <a
            href="#"
            onClick={() => setCurrentPage(totalPages)}
            className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
          >
            <span className="sr-only">Last</span>

            <svg
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 1 1-1.06-1.06L8.94 10 5.22 6.28a.75.75 0 0 1 0-1.06Z
                  M11.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 1 1-1.06-1.06L14.94 10l-3.72-3.72a.75.75 0 0 1 0-1.06Z"
              />
            </svg>
          </a>
      
        </div>
      </div>
    )
}

export default Pagination
