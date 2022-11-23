
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

export default Search;
