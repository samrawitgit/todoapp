//fuctional component
import React from 'react';

const Todos = ({todos, deleteTodo}) => {
    const todoList = todos.length ? (              //true if there's todos, false if it's 0
        todos.map(todo => {
            return (
                <div className="collection-item" key={todo.id}>
                    <span>
                    {todo.content}
                    <button onClick={() => {deleteTodo(todo.id)}}>remove</button>
                    </span>
                </div>
            )
        })
    ) : (
        <p className="center">You have no todos left, yay!!</p>
    )   
    return(
        <div className="todos collection">
            {todoList}
        </div>
    )
}

export default Todos;