import React, { Component } from "react";

export default class Profile extends Component{
    render() {
        return(
            <div className="flex flex-col justify-items-start items-start bg-gray-700 rounded-lg m-3">
                <div className="flex flex-col px-8 py-8 gap-2">
                    <div className="flex">
                        <div className="item w-32 h-32">
                            <img src="https://avatars.githubusercontent.com/u/72368050?v=4" alt="alfredo" className="object-cover rounded-full" />
                        </div>
                        <div className="flex-col item text-left h-32">
                            <div className="item h-10 px-3 py-5">
                                <h2 className="font-medium text-3xl text-white">Alfredo Press</h2>
                            </div>
	                        <div className="item h-10 px-3 py-5">
                                <h3 className="text-xl text-white">@alfredop</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="flex gap-2 px-8">
                        <button className="text-white font-semibold py-2 px-4 border-b-4 border-white hover:border-white shadow">Tersimpan</button>
                        <button className="text-white font-semibold py-2 px-4 border-b-4 border-gray-700 hover:border-white shadow">Resep Saya</button>
                        <button className="text-white font-semibold py-2 px-4 border-b-4 border-gray-700 hover:border-white shadow">Cookie Tale</button>
                    </div>
                </div>
            </div>
        )
    }
}