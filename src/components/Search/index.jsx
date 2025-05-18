import Weather from "../weather";


export default function Search(search,setSearch,handleSearch){


    return <div className="search-engine">
<input type="text" 
 placeholder="Enter city name" 
 name="search" 
 value={search} 
 onChange={(event)=> setSearch(event.target.value)}/>
 <button  onClick={handleSearch}>Search Weather</button>
 <Weather/>
    </div>
}