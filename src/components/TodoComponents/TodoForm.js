import React from 'react'

class TodoForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            text : ''
        }
    }   
    handleChange = e => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.addTodo(this.state.text)
        this.setState({
            text: ''
        })
    }
    render(){
        return(
            <form onSubmit = {this.handleSubmit}>
                <input type = 'text' name = 'text' value = {this.state.text} onChange ={this.handleChange} />
                <button>Add</button>
            </form>
        )
    }
}

export default TodoForm