import { useState, useEffect } from 'react';
import Navbar from './navbar';
import Footer from './footer';
import RecipeSearchBox from './recipeSearchBox';
import RecipeBox from './recipeBox';

export default function HomeScreen() {
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
            <Footer />
        </div>
    );
}