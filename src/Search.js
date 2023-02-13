
function Search({setSearch}){

  function handleSearch(e){
    e.preventDefault();
    let value = e.target.value;
    setSearch(value)
    fetch(`/search`, {
      method: 'GET', 
      headers: {'Content-type': 'application/json'},
      

    })

  }

   
    return (
        <div id="searchbar-container">
          <div id="search-label">
          <label className="search-font">Search Collection</label>
          <input onChange={handleSearch} type="text" id="search" placeholder="search artworks"/>
          </div>  
        </div>
        );
    }
    export default Search