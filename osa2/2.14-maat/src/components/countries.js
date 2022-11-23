import Country from './country'
import Weather from './weather'

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
        <div key='weather'>
        <Weather country={foundCountry} />
        </div>
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

export default Countries;
