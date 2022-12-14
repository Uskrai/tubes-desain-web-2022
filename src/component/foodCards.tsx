import React, { Component } from "react";

interface Props {
    image: string;
}

export default class FoodCards extends Component <Props>{
    render(){
        return (
            <div>
                <p>{this.props.image}</p>
                {/* <img src={require(this.props.image)} alt="not found"></img> */}
            </div>
        )
    }
}