import React from "react"
import { nanoid } from "nanoid"
import useFetch from "./components/useFetch"
import Input from "./components/Input"
import Countries from "./components/Countries"
import Loading from "./loading.svg"

function Main() {

    const { allData, isPending, error } = useFetch("https://restcountries.com/v2/all?fields=name,capital,population,region,flag")

    const countryCard =
        allData.map(card => {
            Object.assign(card, { id: nanoid() })
            return allData && <Countries {...card}
                key={card.id} />
        })

    return (
        <main className={!isPending ? "index-main" : ""}>
            {!isPending && <Input />}
            <section className="countries--container">
                {error && <div>{error}</div>}
                {isPending && <img src={Loading} alt="loading" className="loading" />}
                {countryCard}
            </section>
        </main>
    )
}

export default Main