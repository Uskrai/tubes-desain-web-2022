import React, { Component } from "react";

interface Props {
    image: string;
    title: string;
    keys: string;
    difficulty: string;
    serving: string;
    times: string;
}

export default class FoodColumn extends Component<Props>{
    render() {
        return (
            <div className="flex m-2 transition ease-in-out duration-300 rounded-2xl bg-white hover:bg-gray-300">
                <a className="flex flex-row w-full" href={"/recipe/" + this.props.keys}>
                    <img className="rounded-2xl w-52" src={this.props.image} />
                    <div className="flex flex-col">
                        <h3 className="p-2 text-xl self-start">{this.props.title}</h3>
                        <p className="p-1 pl-2 self-start">Tingkat kesulitan : {this.props.difficulty}</p>
                        <p className="p-1 pl-2 self-start">Porsi : {this.props.serving}</p>
                        <p className="p-1 pl-2 self-start">Waktu Masak : {this.props.times}</p>
                    </div>
                </a>
            </div>
        )
    }
}