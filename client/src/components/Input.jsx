import React, { Component } from 'react';

class Input extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentName: ''
    }
  }

  showName(nameUser) {
    this.setState({
      currentName: nameUser
    })
  }

  render() {
    console.log(this.state)
    const { nameUser } = this.props
    return (
      <div>
        <input type="text" value={nameUser} onClick={() => { this.showName(nameUser) }} />
        name: {this.state.currentName}
      </div>
    )
  }
}

Input.propTypes = {
  nameUser: React.PropTypes.string.isRequired
}

export default Input
