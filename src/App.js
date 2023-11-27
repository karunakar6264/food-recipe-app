import React, {useState} from "react";
import Product from "./Product";
const App = () => {
  const [search,setSearch] = useState("");
  const [data,setData] = useState([]);
  const APP_ID = "924f08f9";
  const APP_KEY = "820cfd18b0e4d7c556d5cc4af6c6c3e5";

  const submitHandler = e => {
    e.preventDefault();
   fetch(`https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`)
   .then(
    response => response.json()
   ).then(
    data => setData(data.hits)
   )
  }
  return(
   <div>
      <center>
        <h3>Search your favorite recipe</h3>
        <form onSubmit={submitHandler}>
        <input type="text" value={search} onChange={(e) => setSearch(e.target.value)}/> <br /> <br />
        <input type="submit" className="btn btn-primary" value="search"/>
    </form>

    {data.length>1 ? <Product data={data}/>:null}
    </center>
    </div>
  )
}
export default App