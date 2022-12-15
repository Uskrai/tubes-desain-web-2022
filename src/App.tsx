import React from 'react';
// import logo from './logo.svg';
import './App.css';
import FoodCards from './component/foodCards';
import Navbar from './component/navbar';
import Footer from './component/footer';
import RecipeSearchBox from './component/recipeSearchBox';
import RecipeDescription from './component/recipeDescription';
import IngredientsSection from './component/ingredientsSection';
import CookingSteps from './component/cookingSteps';

function App() {
  return (
    <div className="App bg-gray-600">
      <Navbar/>
      <p>test</p>
      <FoodCards image='./assets/images/strawberryshortcake.png'/>
      <RecipeSearchBox/>
      <RecipeDescription/>
      <IngredientsSection/>
      <CookingSteps/>
      <Footer/>
    </div>
  );
}

export default App;
