import React from "react";

function Input(props) {
    return (
        <form className={props.isDark ? "dark" : ""}>
            <input type="text" placeholder="&#xF002; Search for a country ..." style={{ fontFamily: "FontAwesome", fontStyle: "Normal" }} onChange={(event) => props.onChange(event)} className={props.isDark ? "dark" : ""} />
            <select name="continents" className={props.isDark ? "dark" : ""} >
                <option>Filter By Region</option>
                <option value="africa">Africa</option>
                <option value="asia">Asia</option>
                <option value="america">America</option>
                <option value="europe">Europe</option>
                <option value="oceania">Oceania</option>
                <option value="antartica">Antartica</option>
            </select>
        </form>
    )
}

export default Input