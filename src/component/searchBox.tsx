import React, { Component } from "react";
import FoodColumn from "./foodColumn";

interface Props {
    title?: string;
    data: any;
}

export default class SearchBox extends Component<Props> {
    render() {
        return (
            <div className="flex flex-row p-6 m-3 gap-2">
                <div className="p-6 flex flex-col bg-gray-700 rounded-lg w-2/5 items-start h-fit">
                    <h3 className="text-xl text-white font-bold">Filter</h3>
                    <form className="flex flex-col w-full" action="/search/" method="get">
                        <p className="mt-10 text-white font-bold self-start">Pencarian</p>
                        <input type="text" name="q" placeholder="Cari masakanmu disini" className="w-full rounded-lg bg-gray-50 border border-gray-300 text-gray-900 p-2" />
                        <p className="mt-10 text-white font-bold self-start">Tingkat kesulitan</p>
                        <select className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" name="diff" id="diff">
                            <option selected disabled hidden>Pilih tingkat kesulitan</option>
                            <option value="Mudah">Mudah</option>
                            <option value="Cukup Rumit">Cukup Rumit</option>
                        </select>
                        <input className="bg-blue-600 mt-10 text-white p-3 rounded-lg w-full" type="submit" value="Apply" />
                    </form>
                </div>
                <div className="p-6 flex flex-col bg-gray-700 rounded-lg w-3/5">
                    <h3 className="text-xl text-white font-bold self-start">{(this.props.title) ? `Hasil Pencarian Dari "${this.props.title}"` : "Resep Masakan"}</h3>
                    {
                        this.props.data.map((data: any) => {
                            return (<FoodColumn image={data.thumb} title={data.title} keys={data.key} difficulty={data.difficulty} serving={data.serving} times={data.times} />)
                        })
                    }
                </div>
            </div>
        )
    }
}