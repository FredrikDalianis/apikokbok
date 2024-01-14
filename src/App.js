import CardItem from './Card';
import React, { useState, useEffect } from 'react';
import './App.css';
function App() {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");

  const searchJson = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSearch(event.target.search.value);
    await fetchData();
  }

  useEffect(() => {
   fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(searchJson + search);
      const json = await response.json();
      console.log(json.meals);
      setRecipes(json.meals);
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <div className="App">
      <form 
      onSubmit={handleSubmit}
      >
        <label style={{fontWeight:"bold"}}>Search Recipe :   </label>
        <input
     style={{ textAlign:"center", borderRadius:"1em",textDecoration:"", color:"black" }}
          
          className='searchfield'
          type='search'
          name='search'
        />
        <button 
     style={{ fontStyle:"Courier",fontWeight:"bold",textAlign:"center",margin:"1em", borderRadius:"3.33em",padding:"0.5em",textDecoration:"", color:"black" }}
        
        type='submit'>Go !</button>
      </form>
      {recipes?.map((recipe) => (
      <CardItem 
      title={recipe.strMeal} 
      description={recipe.strInstructions}
      image={recipe.strMealThumb} 
      >
    
        </CardItem>
      ))}
{/*       <div className="recipeResult">
        <h2>Search result for: {search}</h2>
        <ul
        style={{ listStyle:"none"}}>
          {recipes?.map((recipe) => (
            <li key={recipe.idMeal}>
              <h3>{recipe.strMeal}</h3>
              <img 
              src={recipe.strMealThumb} 
              alt={recipe.strMeal} 
              style={{borderRadius:"5em",height:260, width:260}}/>
              <p
              style={{ textAlign:"left", padding:"4em",textDecoration:"", color:"black" }}
              >{recipe.strInstructions}</p>
            </li>
          ))}
        </ul>
      </div> */}
    </div>
  );
}

export default App;


