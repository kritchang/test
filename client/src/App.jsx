import React, { Component } from 'react'
import AddProduct from './components/AddProduct'
import ShowItemPokemonAxios from './components/ShowItemPokemonAxios'

class App extends Component {
  constructor(props) {
    super(props)
    this.handleData = this.handleData.bind(this)
  }
  handleData() {
    console.log('dds')
    this.forceUpdate()
  }
  render() {
    return (
      <div className="App">
        <AddProduct refreshData={this.handleData} />
        <ShowItemPokemonAxios />
      </div>
    )
  }
}

export default App
