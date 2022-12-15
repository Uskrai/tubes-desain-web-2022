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
<<<<<<< Updated upstream
import Profile from './component/profile';
=======
import DifficultyFilter from './component/difficultyFilter';
>>>>>>> Stashed changes

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
<<<<<<< Updated upstream
      <Profile/>
=======
      <DifficultyFilter/>
>>>>>>> Stashed changes
      <Footer/>
    </div>
  );
}

export default App;
