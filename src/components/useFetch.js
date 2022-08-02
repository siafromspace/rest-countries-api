import React from "react"

function useFetch(url) {

    const [allData, setAllData] = React.useState([])
    const [isPending, setIsPending] = React.useState(true)
    const [error, setError] = React.useState(null)

    React.useEffect(() => {
        fetch(url)
            .then(res => {
                if (!res.ok) {
                    throw Error('could not fetch the data for that resource')
                }
                return res.json()
            })
            .then(data => {
                setAllData(data)
                setIsPending(false)
                setError(null)
            })
            .catch(err => {
                setError(err.message)
                setIsPending(false)
            })
    }, [url])

    return { allData, isPending, error }
}

export default useFetch

// "https://restcountries.com/v2/all?fields=name,capital,population,region,flag"