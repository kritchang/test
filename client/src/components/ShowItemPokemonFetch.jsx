import React, { Component } from 'react'

class ShowItemPokemonFetch extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: {
        name: '',
        age: 0,
      }
    }
    this.getData()
  }

  getData() {
    fetch('http://localhost:5000')
      .then(response => response.json())
      .then((resData) => {
        console.log(resData)
        this.setState({
          data: resData
        })
      })
  }

  render() {
    return (
      <div>data use from fetch : {this.state.data.name} </div>
    )
  }
}


export default ShowItemPokemonFetch
