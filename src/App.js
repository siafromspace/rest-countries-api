import React from "react"
import Header from "./components/Header"
import Input from "./components/Input"
import Main from "./components/Main"
import { nanoid } from "nanoid"

function App() {

  const [allData, setAllData] = React.useState([])
  const [searchData, setSearchData] = React.useState('')
  const [filteredData, setFilteredData] = React.useState([])
  const [isDark, setIsDark] = React.useState(false)
  const [dropDownData, setDropDownData] = React.useState(null)

  console.log(filteredData)

  React.useEffect(() => {
    fetch("https://restcountries.com/v2/all?fields=name,capital,population,region,flag")
      .then(res => res.json())
      .then(data => setAllData(data))
  }, [])

  const countryCard = (searchData.length === 0) && (dropDownData === null) ?
    allData.map(card => {
      Object.assign(card, { id: nanoid() })
      return <Main {...card}
        isDark={isDark} key={card.id} />
    }) :
    filteredData.map(card => {
      Object.assign(card, { id: nanoid() })
      return <Main {...card}
        isDark={isDark} key={card.id} />
    })


  function searchItems(event) {
    event.preventDefault()
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

  function dropDownItems(event) {
    event.preventDefault()
    const dropDownInput = event.target.value
    setDropDownData(dropDownInput)

  }

  React.useEffect(() => {
    if (dropDownData) {
      const filteredData = allData.filter(data => {
        return Object.values(data).join('').toLowerCase().includes(dropDownData.toLowerCase())
      })
      setFilteredData(filteredData)
    } else {
      setFilteredData(allData)
    }
  }, [dropDownData, allData])

  React.useEffect(() => {
    const body = document.querySelector('.body')
    body.classList.toggle('dark')
  }, [isDark])

  function toggleDarkMode() {
    setIsDark(prevState => !prevState)
  }

  return (
    <div className="container">
      <Header isDark={isDark} toggleDark={toggleDarkMode} />
      <Input onChange={searchItems} isDark={isDark} dropDown={dropDownItems} />
      <section className="countries--container">
        {countryCard}
      </section>
    </div>
  )
}

export default App;
