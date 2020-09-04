import React,{useEffect,useState} from 'react';
import './Recipe.css'
import Recipe from './Recipe';
const Recipeapp=()=> {
const APP_ID="e2d8436a";
const APP_KEY="f396d52c8e649ae322d946897f02d18f";



const [recipe,setRecipe]=useState([]);
const [search,setSearch]=useState('');
const [query,setQuery]=useState("chicken");
useEffect(()=>{
    getRecipe();
},[query]);

const getRecipe=async ()=>{
    const res=await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data=await res.json();
setRecipe(data.hits)
 console.log(data);
};
const updateSearch=e=>{
    setSearch(e.target.value);
    
}
const getSearch=e=>{
    e.preventDefault();
    setQuery(search);
    setSearch("");
}
    return (
        <div className="App">
            <form className="search_form" onSubmit={getSearch}>
            <input className="search_bar" type="text" value={search} onChange={updateSearch}/>
            <button className="search_button"  type="submit">
                search
                </button>
    
            </form>
         <div className="recipe">
         {recipe.map(recipes=>(<Recipe 
    key={recipes.recipe.label}
    titel={recipes.recipe.label}
     calories={recipes.recipe.calories} 
     image={recipes.recipe.image}
     ingredients={recipes.recipe.ingredients}/>))}
             </div>
   
        </div>
    )
}

export default Recipeapp;