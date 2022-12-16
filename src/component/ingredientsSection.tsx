import React, {Component} from "react";

interface Props {
    ingredients : any;
}

export default class IngredientsSection extends Component<Props>{
    render() {
        return(
            <div className="flex flex-col items-start bg-gray-700 m-3 rounded-lg p-4">
                <h2 className="text-white text-3xl font-semibold mb-2">Bahan</h2>
                <div className="flex flex-col items-start border-2 border-gray-800 p-4 rounded-xl bg-gray-300 w-full">
                    {
                        this.props.ingredients.map((data:any) => {
                            return (
                                <p><span className="font-semibold mr-1">{data}</span></p>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}