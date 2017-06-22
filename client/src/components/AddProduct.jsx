import React, { Component } from 'react'
import axios from 'axios'

class AddProduct extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
      data: {}
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    console.log(e.target.name)
    this.state.data[e.target.name] = e.target.value
    this.setState(
      this.state
    )
  }

  handleSubmit() {
    const { refreshData } = this.props
    axios.post('http://localhost:3002/inventory', this.state.data)
    .then((res) => {
      console.log(res)
    }).then(() => {
      refreshData()
      this.state.data = {}
    })
  }

  render() {
    // if (this.state.isLoading) return (<div> Loading.. </div>)
     // this.props.handleData
    return (
      <div>
        <input name="SKU" value={this.state.data.SKU} onChange={this.handleChange} />
        {this.state.data.SKU}
        <button onClick={this.handleSubmit} >Submit</button>
      </div>
    )
  }
}

AddProduct.propType = {
  refreshData: React.PropTypes.func.isRequired
}


export default AddProduct
