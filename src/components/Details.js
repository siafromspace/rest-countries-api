import React from "react"

function Details(props) {
    let languages = props.languages.map(lang => {
        return lang.name
    }).join(', ')
    return (
        <div className="details">
            <section className="details--logo">
                <img src={props.flag} alt="flag" />
            </section>
            <section className="details--container">
                <h1>{props.name}</h1>
                <div className="details--text">
                    <div>
                        <p>Native Name: <span className="gray">{props.nativeName}</span></p>
                        <p>Population: <span className="gray">{props.population}</span></p>
                        <p>Region: <span className="gray">{props.region}</span></p>
                        <p>Sub Region: <span className="gray">{props.subregion}</span></p>
                        <p>Native Name: <span className="gray">{props.capital}</span></p>
                    </div>
                    <div>
                        <p>Top Level Domain: <span className="gray">{props.topLevelDomain}</span></p>
                        <p>Currencies: <span className="gray">
                            {props.currencies && props.currencies[0].name}</span></p>
                        <p>Languages: <span className="gray">{languages}</span></p>
                    </div>
                </div>
                <div className="border--details">
                    {/* <p>Border Countries: <span className="gray">{props.borders[0]}</span></p> */}
                </div>
            </section>
        </div>
    )
}

export default Details