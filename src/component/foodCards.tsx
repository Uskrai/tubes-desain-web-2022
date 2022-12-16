import React, { Component } from "react";

interface Props {
    image: string;
    title: string;
    keys: string;
}

export default class FoodCards extends Component <Props>{
    render(){
        return (
            <div className="flex relative m-2 transition ease-in-out duration-300 hover:scale-110">
                <a href={this.props.keys}>
                    <img className="rounded-2xl" src={this.props.image}/>
                    <div className="absolute bottom-0 left-0 right-0 px-4 py-2 bg-gray-800 opacity-80 rounded-b-2xl">
                        <h3 className="text-xl text-white font-bold">{this.props.title}</h3>
                    </div>
                </a>
            </div>
        )
    }
}