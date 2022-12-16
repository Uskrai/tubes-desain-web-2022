import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './component/navbar';
import Footer from './component/footer';
import RecipeSearchBox from './component/recipeSearchBox';
import RecipeBox from './component/recipeBox';
import RecipeDescription from './component/recipeDescription';
import IngredientsSection from './component/ingredientsSection';
import CookingSteps from './component/cookingSteps';
import Profile from './component/profile';
import DifficultyFilter from './component/difficultyFilter';

function App() {
  useEffect(() => {
    document.title = 'CookiPad';
  }, []);

  const [resultCat, setResCat] = useState([]);

  useEffect(() => {
    const api = async () => {
      const data = await fetch("https://masak-apa-tomorisakura.vercel.app/api/category/recipes", {
        method: "GET"
      });
      const jsonData = await data.json();
      setResCat(jsonData.results);
    };

    api();
  }, []);

  const [resultRec, setResRec] = useState([]);

  useEffect(() => {
    const api = async () => {
      const data = await fetch("https://masak-apa-tomorisakura.vercel.app/api/recipes-length/?limit=6", {
        method: "GET"
      });
      const jsonData = await data.json();
      setResRec(jsonData.results);
    };

    api();
  }, []);
  return (
    <div className="App bg-gray-600">
      <Navbar />
      <RecipeSearchBox data={resultCat} />
      <RecipeBox data={resultRec} />
      {/* <RecipeDescription/>
      <IngredientsSection/>
      <CookingSteps/>
      <Profile/>
      <DifficultyFilter/> */}
      <Footer />
    </div>
  );
}

export default App;
