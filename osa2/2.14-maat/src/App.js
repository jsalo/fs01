import { useState, useEffect } from 'react'
import axios from 'axios'
import Search from './components/search'
import Countries from './components/countries'

const App = () => {
  const [countries, setCountries] = useState([]) 
  const [searchTerm, setSearchTerm] = useState('')

  const receivedCountries = response => {
    console.log('receivedCountries')
    setCountries(response.data)
  }

  const loadCountries = () => {
    console.log('loadCountries')
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(receivedCountries)
  }
  useEffect(loadCountries, [])

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value)
  }

  const searchCountry = (event) => {
    event.preventDefault()
  }

  return (
    <div>
      <Search 
        searchCountry={searchCountry} 
        searchTerm={searchTerm} 
        handleSearchChange={handleSearchChange} 
      />
      <Countries countries={countries} searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      
    </div>
  )
}

export default App
