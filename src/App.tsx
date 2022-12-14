import React from 'react';
// import logo from './logo.svg';
import './App.css';
import FoodCards from './component/foodCards';
import Navbar from './component/navbar';
import Footer from './component/footer';
import RecipeSearchBox from './component/recipeSearchBox';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <p>test</p>
      <FoodCards image='./assets/images/strawberryshortcake.png'/>
      <RecipeSearchBox />
      <Footer/>
    </div>
  );
}

export default App;
