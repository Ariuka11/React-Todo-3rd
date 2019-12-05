import React from 'react'

function Todo(props) {
    return (
        <ul>
            <li>{props.todo.task}</li>
        </ul>
    )
}

export default Todo;