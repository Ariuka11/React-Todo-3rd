import React from 'react'


function Todo(props) {
    return (
        <ul>
            <li style = {props.todo.completed ? {textDecoration : 'line-through'}: null}
                onClick = {() => props.toggleTodo(props.todo.id)}>
                {props.todo.task}
            </li>
        </ul>
    )
}

export default Todo;