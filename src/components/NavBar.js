import Logo from "./Logo"

function NavBar({ children }) {//reusable component with fix Logo
    return(
        <nav className="nav-bar w-screen">
            <Logo />
            {children}
        </nav>
    )
    
}

export default NavBar