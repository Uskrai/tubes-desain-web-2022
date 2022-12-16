import { Route, Routes } from "react-router-dom"
import './App.css';
import HomeScreen from './component/homeScreen';
import RecipeScreen from "./component/recipeScreen";
import Login from "./component/login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/recipe/:id" element={<RecipeScreen />} />
      <Route path="/login" element={<Login />} />
    </Routes>
    // <div className="App bg-gray-600">
    //     <HomeScreen/>
    // </div>
  );
}

export default App;
