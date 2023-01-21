
const Header = ({ handleToggleDarkMode }) => {
return(
    <div className="header">
        <h1>Notes Here</h1>
        <button
        onClick={() => handleToggleDarkMode((prevDarkMode) => !prevDarkMode)}
        className="save">toggle mode</button>
    </div>
)
}

export default Header;