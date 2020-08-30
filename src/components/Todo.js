import React from "react";

const Todo = ({text, todos, setTodos, todo}) => {
    const deleteHandler = () => {
        setTodos(todos.filter(el => el.id !== todo.id))
    };

    const completeHandler = () => {
        setTodos(todos.map(item => {
            if(item.id === todo.id) {
                return {
                    ...item,
                    completed: !item.completed
                }
            }
        }))
    };

    return (
        <div className="todo">
            <li className={`${todo.completed ? "completed" : ""}`}>{text}</li>
            <button onClick={completeHandler} id="complete-btn"><i className="fas fa-check"></i></button>
            <button onClick={deleteHandler} id="delete-btn"><i className="fas fa-trash-alt"></i></button>
        </div>
    );
};

export default Todo;