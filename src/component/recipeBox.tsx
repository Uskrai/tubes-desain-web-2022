import React, { Component } from "react";
import FoodCards from '../component/foodCards';

interface Props {
    data: any;
}

export default class RecipeBox extends Component<Props> {
    // console.log(this.props.data);
    render() {
        return (
            <div className="flex flex-col bg-gray-700 rounded-lg p-6 m-3">
                <h3 className="text-2xl text-white font-bold self-start">Masakan Hari Ini</h3>
                <div className="grid grid-cols-3 gap-4 self-center">
                    {
                        this.props.data.map((data: any) => {
                            return <FoodCards image={data.thumb} title={data.title} keys={data.key} />
                        })
                    }
                </div>
            </div>
        )
    }
}