import React from "react";
import { Link, useParams } from "react-router-dom"
import useFetch from "./components/useFetch";
import Details from "./components/Details";
import Loading from "./loading.svg"

function CountryDetails() {
    const { id } = useParams()

    const { allData, isPending, error } = useFetch("https://restcountries.com/v2/all?fields=name,capital,population,region,flag,id,subregion,languages,currencies,nativeName,borders,topLevelDomain")

    function getCountry(population) {
        return allData.find(
            (country) => { return country.population === population && country }


        )
    }
    let country = getCountry(parseInt(id))

    return (
        <main className="main-two">
            <Link to="/">
                <i class="fa-solid fa-arrow-left-long"></i>
                <p>Back</p>
            </Link>

            {error && <div>{error}</div>}
            {isPending && <img src={Loading} alt="loading" className="loading" />}
            {country && <Details {...country} />}
        </main>
    )
}

export default CountryDetails

