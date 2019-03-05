import React, {Component} from 'react'
import './index.css'

export default class TodoList extends Component{

    render(){
        const {isDone} = this.props.taskList
        console.log(isDone)
        const taskList = this.props.taskList.map(task =>{
            return <li className = {isDone ? 'task-done' : 'task-active'} onClick={this.props.taskDone} key={task.id} >
                {task.text}
                <button onClick={() => this.props.deleteTaskFromList(task.id)}>Delete</button>
            </li>
        })
        return(
            <div className='task-list'>
                <ul>{taskList}</ul>
            </div>
        )
    }
}
