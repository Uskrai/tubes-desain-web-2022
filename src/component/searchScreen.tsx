import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Footer from "./footer";
import Navbar from "./navbar";
import SearchBox from "./searchBox";

export default function CategoryScreen() {
    const [idSearch, setSearch] = useSearchParams();
    document.title = (idSearch.get("q") !== null) ? `Hasil Pencarian Untuk ${idSearch.get("q")}` : "Resep Masakan";

    const [resultRec, setResRec] = useState([]);

    useEffect(() => {
        const api = async () => {
            const data = await fetch("https://masak-apa-tomorisakura.vercel.app/api/search?q=" + ((idSearch.get("q") !== null) ? idSearch.get("q") : ""), {
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
            <SearchBox title={idSearch.get("q") ?? ''} data={(idSearch.get("diff") !== null) ? resultRec.filter((data: any) => data.difficulty === idSearch.get("diff")) : resultRec} />
            <Footer />
        </div>
    );
}