import React from "react"

function Main(props) {
    return (
        <div className={props.isDark ? "country--card dark" : "country--card"}>
            <div className="country--img-card">
                <img src={props.flag} className="country--img" alt="flag" />
            </div>
            <div className="country--text">
                <h3 className="country--name">{props.name}</h3>
                <p>Population: <span>{props.population}</span></p>
                <p>Region: <span>{props.region}</span></p>
                <p>Capital: <span>{props.capital}</span></p>
            </div>
        </div>
    )
}

export default Main
