import React from "react";

const Form = ({inputText, setInputText, todos, setTodos}) => {
    const submitHandler = (event) => {
        event.preventDefault();
        // regex is your friend
        if(inputText.replace(/ \s /g, '').length !== 0)
            setTodos([...todos, {text: inputText, completed: false, id: Math.random()*1000}]);
        setInputText("");
    };

    const inputHandler = (event) => {
        setInputText(event.target.value);
    };

    return (
        <form onSubmit={submitHandler}>
            <input value={inputText} onChange={inputHandler} type="text" placeholder="Buy milk..." />
            <button type="submit"><i className="fas fa-plus-square"></i></button>
        </form>
    );
}

export default Form;