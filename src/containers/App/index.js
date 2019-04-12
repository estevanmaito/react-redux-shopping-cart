import React, { Component } from "react";

import Navbar from "../Navbar";
import ProductList from "../ProductList";

class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <ProductList />
      </>
    );
  }
}

export default App;
