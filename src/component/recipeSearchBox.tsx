import React, { Component } from "react";

interface Props {
    data: any;
}

export default class RecipeSearchBox extends Component<Props> {
    render() {
        return (
            <div className="flex flex-col items-start bg-gray-700 rounded-lg p-6 m-3">
                <h3 className="text-2xl text-white font-bold">Temukan ide masakan!</h3>
                <p className="text-base text-white">Ini adalah ide - ide untuk masakanmu</p>
                <div className="flex flex-row flex-wrap p-2">
                    {
                        this.props.data.map((data: any) => {
                            return <a href={data.key} className="bg-gray-300 rounded-xl px-2 py-1.5 m-1 transition ease-in-out duration-300 hover:scale-105">{data.category}</a>
                        })
                    }
                </div>
            </div>
        )
    }
}