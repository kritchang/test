import React, { Component } from 'react';
import Input from './Input'
import ToDoList from './ToDoList'

const testStr = 'ddd'

class FormToDoList extends Component {
  render() {
    return (
      <div className="FormToDo">
        hello
        <Input nameUser={testStr} />
        <ToDoList />
      </div>)
  }
}

export default FormToDoList
