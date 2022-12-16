import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import Navbar from './navbar';
import Footer from './footer';
import RecipeDescription from './recipeDescription';
import IngredientsSection from './ingredientsSection';
import CookingSteps from './cookingSteps';

export default function RecipeScreen() {
    const idRecipe = useParams();
    const [resultRec, setResRec] = useState<any[]>([]);

    useEffect(() => {
        const api = async () => {
            const data = await fetch("https://masak-apa-tomorisakura.vercel.app/api/recipe/" + idRecipe.id, {
                method: "GET"
            });
            const jsonData = await data.json();
            setResRec([jsonData.results]);
        };

        api();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div className="App bg-gray-600">
            <Navbar />
            {
                resultRec.map((data) => {
                    return (
                        <div>
                            <RecipeDescription title={data.title} description={data.desc} author={data.author.user} gambar={data.thumb} />
                            <IngredientsSection ingredients={data.ingredient} />
                            <CookingSteps step={data.step}/>
                        </div>
                    )
                })
            }
            <Footer />
        </div>
    );
}