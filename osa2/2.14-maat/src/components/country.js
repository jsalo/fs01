
const Country = ({country, setSearchTerm}) => {
    console.log('Country', country.cca2, country)
    return (
      <span key={country.cca2}>
        <b>{country.name.common}</b> &nbsp; 
        <button value={country.name.common} onClick={e => setSearchTerm(e.target.value)}>show</button>
      </span>
    )
}

export default Country;
