import React from "react";
// import useFetch from "./useFetch";

function Input() {

    // const { allData } = useFetch("https://restcountries.com/v2/all?fields=name,capital,population,region,flag")



    return (
        <form>
            <input
                type="text"
                placeholder="&#xF002; Search for a country ..." style={{ fontFamily: "FontAwesome", fontStyle: "Normal" }}
            />
            <select>
                <option value="">Filter By Region</option>
                <option value="africa">Africa</option>
                <option value="asia">Asia</option>
                <option value="americas">Americas</option>
                <option value="europe">Europe</option>
                <option value="oceania">Oceania</option>
                <option value="antartica">Antartica</option>
            </select>
        </form>
    )
}

export default Input