import {useState} from 'react'


function Search(){
  const [search, setSearch] = useState('')

  function handleSearch(e){
    e.preventDefault();
    let value = e.target.value;
    setSearch(value)
    fetch(`/search`)
    .then(r=>r.json())
    .then(search => console.log(search))
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