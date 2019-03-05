import React, {Component} from 'react'
// import './index.css'

export default class AddTask extends Component{
    state = {
        text:''
    }

    handlerChange =(event) =>{
        const text = event.target.value
    }
    render(){
        return(
            <div className='addtask'>
                <input name="addtask" value ={this.state.value} onChange = {this.handlerChange}/>
                <button submit="submit" onSubmit={this.props.addTaskToList}>Add</button>
            </div>
        )
    }
}
