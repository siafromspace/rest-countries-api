import React from "react"
import Header from "./components/Header"
import Input from "./components/Input"
import Main from "./components/Main"

function App() {

  const [allData, setAllData] = React.useState([])
  const [searchData, setSearchData] = React.useState('')
  const [filteredData, setFilteredData] = React.useState([])

  React.useEffect(() => {
    fetch("https://restcountries.com/v2/all?fields=name,capital,population,region,flag")
      .then(res => res.json())
      .then(data => setAllData(data))
  }, [])

  const countryCard = searchData.length === 0 ?
    allData.map(card => {
      return <Main {...card} />
    }) :
    filteredData.map(card => {
      return <Main {...card} />
    })


  function searchItems(event) {
    const searchInput = event.target.value
    setSearchData(searchInput)
    if (searchInput !== '') {
      const filteredData = allData.filter(data => {
        return Object.values(data).join('').toLowerCase().includes(searchData.toLowerCase())
      })
      setFilteredData(filteredData)
    } else {
      setFilteredData(allData)
    }
  }

  return (
    <div className="container">
      <Header />
      <Input onChange={searchItems} />
      <section className="countries--container">
        {countryCard}
      </section>
    </div>
  )
}

export default App;
