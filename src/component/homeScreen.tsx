import React, { Component } from "react";
import { Link } from 'react-router-dom';

class HomeScreen extends Component {
  render() {
    return (
      <div>
        <h1>Home Screen</h1>
        <Link to="/about">Go to About Screen</Link>
      </div>
    );
  }
}