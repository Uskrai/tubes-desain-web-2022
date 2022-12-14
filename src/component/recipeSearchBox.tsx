import React, {Component} from "react";

export default class RecipeSearchBox extends Component{
    render() {
        return (
            <div className="flex flex-col items-start bg-gray-700 rounded-lg w-1/2 p-6">
                <h3 className="text-2xl text-white">Lihat isi kulkasmu!</h3>
                <p className="text-base text-white">Buat hidangan lezat dari bahan yang kamu punyeaa</p>
                <div className="flex flex-row flex-wrap p-2">
                    <a href="#" className="bg-gray-300 rounded-full px-2 m-1">Bawang Bombay</a>
                    <a href="#" className="bg-gray-300 rounded-full px-2 m-1">Sawi Hijau</a>
                    <a href="#" className="bg-gray-300 rounded-full px-2 m-1">Mangga</a>
                    <a href="#" className="bg-gray-300 rounded-full px-2 m-1">Nangka</a>
                    <a href="#" className="bg-gray-300 rounded-full px-2 m-1">Kecap</a>
                    <a href="#" className="bg-gray-300 rounded-full px-2 m-1">Saus Tiram</a>
                    <a href="#" className="bg-gray-300 rounded-full px-2 m-1">Telur Asin</a>
                    <a href="#" className="bg-gray-300 rounded-full px-2 m-1">Kacang Panjanggg</a>
                    <a href="#" className="bg-gray-300 rounded-full px-2 m-1">Tepung Terigu</a>
                    <a href="#" className="bg-gray-300 rounded-full px-2 m-1">Gomu-gomu No Mi</a>
                </div>
            </div>
        )
    }
}