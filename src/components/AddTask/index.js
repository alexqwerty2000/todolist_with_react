import React, {Component} from 'react'
// import './index.css'

export default class AddTask extends Component{
    state = {
        text:''
    }

    handlerChange =(event) =>{
        this.setState({
            text: event.target.value
        })
        console.log(event.target.value)
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
