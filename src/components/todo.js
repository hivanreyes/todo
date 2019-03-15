import React, { Component } from "react";
import style from './todo.scss';

class Todo extends Component {
  constructor(args){
    super();
    this.state = {
      currentValue: '',
      todoList: [],
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleChange(e){
    this.setState({ currentValue: e.target.value });
  }

  handleAdd() {
    const { currentValue, todoList } = this.state
    let list = todoList;
    if(currentValue.length > 0){
      list.push(currentValue);
      this.setState({currentValue: '', todoList: list})
    }
  }

  handleDelete(item){
    const { todoList } = this.state
    const newList = todoList.filter(function(value, index, arr){
      return value !== item;
    });
    this.setState({todoList: newList})
  }

  render(){
    const { currentValue, todoList } = this.state

    let table = todoList.map((item, index) => {
      return(
        <tr key={index}>
          <td>{item}</td>
          <td><button className={style.buttonDelete} onClick={() => this.handleDelete(item)}>Delete</button></td>
        </tr>
      )
    })

    return(
      <div className={style.container}>
        <h1 className={style.title}>Todo List</h1>
        <div>
          <input
            className={style.input}
            onChange={this.handleChange}
            value={currentValue}
            placeholder="Add your item here" />
          <button className={style.button} onClick={this.handleAdd}>Add</button>
        </div>
        <div>
          <table>
            <thead>
              <tr>
                <th>To-do</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {table}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
};
  
export default Todo;
