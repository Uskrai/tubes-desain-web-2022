import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom"
import Navbar from './navbar';
import Footer from './footer';
import CategoryBox from './categoryBox';

export default function CategoryScreen() {
    const idCategory = useParams();
    document.title = 'Resep dengan kategori '+ idCategory;

    const [resultRec, setResRec] = useState([]);

    useEffect(() => {
        const api = async () => {
            const data = await fetch("https://masak-apa-tomorisakura.vercel.app/api/category/recipes/" + idCategory.id, {
                method: "GET"
            });
            const jsonData = await data.json();
            setResRec(jsonData.results);
        };

        api();
    }, []);

    return(
        <div className="App bg-gray-600">
            <Navbar />
            <CategoryBox title={idCategory.id} data={resultRec} />
            <Footer />
        </div>
    );
}