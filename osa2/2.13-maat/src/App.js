import { useState, useEffect } from 'react'
import axios from 'axios'


const Country = ({country, setSearchTerm}) => {
  console.log('Country', country.cca2, country)
  return (
    <span key={country.cca2}>
      <b>{country.name.common}</b> {country.name.official} 
      <button value={country.name.common} onClick={e => setSearchTerm(e.target.value)}>show</button>
    </span>
  )
}

const Countries = ({countries, searchTerm, setSearchTerm}) => {
  let matches = []

  if (searchTerm.length === 0) {
    return(
      <div key='apphelp'>Find a country by typing the name.</div>
    )
  }

  if (searchTerm.length) {
    matches = countries.filter(country => {
      return country.name.common.toLowerCase().includes(searchTerm.toLowerCase()) 
    })
  } else {
    matches = countries
  }

  if (matches.length === 1) {

    let foundCountry = matches[0]
    return (
      <div key='appui'>
      <h2 key='apptitle'>{foundCountry.name.common}</h2>
      <div>Capital: {foundCountry.capital}</div>
      <div>Area: {foundCountry.area} km<sup>2</sup></div>
      <div key='languages'>
      <h3>Languages</h3>
        <ul key='languagelist'>
        {Object.keys(foundCountry.languages).map((key) => {
          return (
          <li key={key}>{foundCountry.languages[key]}</li>
          )
        })}
        </ul>
      </div>
      <img src={foundCountry.flags.png} alt='flag'/>
      </div>
    )
  }
  
  if (matches.length > 10) {
    return (
      <div key='apperror'>You found too many countries. Be more specific.</div>
      )
  } else {
    return (
      <div key='appui'>
      <h2 key='apptitle'>Countries</h2>
      <ul key='countrylist'>
      {matches.map(country => {
        return (
          <li key={country.cca2}>
          <Country country={country} setSearchTerm={setSearchTerm} />
          </li>
        )
      })}
      </ul>
      </div>
      )
    }
}

const Search = ({searchCountry, searchTerm, handleSearchChange}) => {
  return (
    <div>
      <h3>Search for countries</h3>
      <form onSubmit={searchCountry}>
        <div>
          search: <input value={searchTerm} onChange={handleSearchChange} />
        </div>
      </form>
    </div>
  )
}



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
