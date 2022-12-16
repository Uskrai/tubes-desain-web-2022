import { Route, Routes } from "react-router-dom"
import './App.css';
import HomeScreen from './component/homeScreen';
import RecipeScreen from "./component/recipeScreen";
import LoginScreen from "./component/loginScreen";
import CategoryScreen from "./component/categoryScreen";
import SearchScreen from "./component/searchScreen";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/recipe/:id" element={<RecipeScreen />} />
      <Route path="/category/:id" element={<CategoryScreen />} />
      <Route path="/search/" element={<SearchScreen />} />
      <Route path="/login" element={<LoginScreen />} />
    </Routes>
  );
}

export default App;
