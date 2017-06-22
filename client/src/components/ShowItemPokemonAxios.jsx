import React, { Component } from 'react'
import axios from 'axios'

class ShowItemPokemonAxios extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
      data: []
    }
  }

  getData() {
    axios.get('http://localhost:3002/inventory')
      .then((res) => {
        console.log(res)
        this.setState({
          data: res.data,
          isLoading: false
        })
      })
  }

  // postData() {
  //   axios.post('http://localhost:3002/inventory', { SKU: {this.state.data}})

  // }

  render() {
    this.getData()
    if (this.state.isLoading) return (<div> Loading.. </div>)
    return (
      <div>
        {
          this.state.data.map(eachData => (
            <div><p> {eachData.SKU} </p></div>
          ))
        }
      </div>
    )
  }
}

export default ShowItemPokemonAxios
