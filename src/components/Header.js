import React from "react"

function Header(props) {
    return (
        <header className={props.isDark ? "header dark" : "header"}>
            <h1 className="header--title">Where in the world?</h1>
            <p className="header--toggle" onClick={() => props.toggleDark()} ><i className={props.isDark ? "fa-solid fa-moon" : "fa-regular fa-moon"}></i>Dark Mode</p>
        </header>
    )
}

export default Header