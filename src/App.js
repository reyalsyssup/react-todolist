import React, {useState} from "react";
import "./App.css";
// components
import Form from "./components/Form";
import Todo from "./components/Todo";

const App = () => {
    const [inputText, setInputText] = useState("");
    const [todos, setTodos] = useState([]);

    return (
        <>
            <h1>My Todo App</h1>
            <Form inputText={inputText} setInputText={setInputText} setTodos={setTodos} todos={todos} />
            <div className="todos">
                <ul>
                    {todos.map(todo => (
                        <Todo text={todo.text} key={todo.id} todos={todos} setTodos={setTodos} todo={todo} />
                    ))}
                </ul>
            </div>
        </>
    );
};

export default App;