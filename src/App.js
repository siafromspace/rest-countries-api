import React from "react"
import Header from "./components/Header"
import Input from "./components/Input"
import Main from "./components/Main"

function App(props) {

  const [allData, setAllData] = React.useState([])
  const [searchData, setSearchData] = React.useState('')
  const [filteredData, setFilteredData] = React.useState([])
  const [isDark, setIsDark] = React.useState(false)

  React.useEffect(() => {
    fetch("https://restcountries.com/v2/all?fields=name,capital,population,region,flag")
      .then(res => res.json())
      .then(data => setAllData(data))
  }, [])

  const countryCard = searchData.length === 0 ?
    allData.map(card => {
      return <Main {...card} isDark={isDark} />
    }) :
    filteredData.map(card => {
      return <Main {...card} isDark={isDark} />
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

  function toggleDarkMode() {
    setIsDark(prevState => {
      const body = document.querySelector('.body')
      if (isDark === true) {
        body.classList.add('dark')
      }
      return !prevState

    })

    console.log(isDark)
  }

  return (
    <div className="container">
      <Header isDark={isDark} toggleDark={toggleDarkMode} />
      <Input onChange={searchItems} isDark={isDark} />
      <section className={props.isDark ? "countries--container dark" : "countries--container"}>
        {countryCard}
      </section>
    </div>
  )
}

export default App;
