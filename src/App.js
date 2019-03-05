import React, { Component } from 'react';
import TodoList from "./components/TodoList";
import AddTask from "./components/AddTask";
import Pages from "./components/pages";


class App extends Component {

  state = {
    tasks: [
        {
            id:1,
            text: 'task1',
            isDone: false
        },
        {
            id:2,
            text: 'task2',
            isDone: false
        }, {
            id:3,
            text: 'task3',
            isDone: false
        }, {
            id:4,
            text: 'task4',
            isDone: false
        },
    ],
      // isDone: false,
      currentTask:{
        id:'',
        text:''
      }
  };

  addTask = () =>{
      const task = this.state.currentTask
      if(task.text!==''){
          task.id = Math.ceil(Math.random()*100-5)
      }
      this.setState({
          tasks: [...this.state.tasks, task],
          currentTask: this.state.currentTask
      })

  }

  taskDone = (id) =>{
      const taskList = this.state.tasks
      this.setState({
          isDone: !this.state.isDone
      })
  }

  deleteTask = id =>{
      const newTasksList = this.state.tasks.filter(task => {
          return task.id!==id
      })
      this.setState({
        tasks: newTasksList,
      })
  }

  render() {
    return (

      <div className="main-content">
        <div className="header">
            <AddTask addTaskToList={this.addTask} />
            <TodoList
                taskList = {this.state.tasks}
                taskDone ={this.taskDone}
                deleteTaskFromList = {this.deleteTask}
            />
            <Pages/>
        </div>
      </div>
    );
  }
}

export default App;

// handleInput  = event => {
//     const itemText  = event.target.value;
//     const itemId = Math.random()*(10-3)*2
//     const currentItem = {
//         text: itemText,
//         id: itemId
//     }
//     this.setState(
//         currentItem
//     )
// }
//
// deleteItem = (id) =>{
//     const filteredItems = this.state.items.filter(item=>{
//         return item.id !== id
//     })
//     this.setState({
//         items: filteredItems
//     })
// }
//
// addItem = () =>{
//     const newItem = this.state.currentItem
//     if(newItem.text!=''){
//         const itens =[...this.state.items, newItem]
//     }
// }