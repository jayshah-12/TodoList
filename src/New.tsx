import { useState } from "react";

const New = () => {
  const [todo, setTodo] = useState([]);
  const [input, setInput] = useState("");

  const handleInput = (e) => {
    const item = e.target.value;
    setInput(item);
  };

  const addTodos = () => {
    if (input.trim() === "") return;
    setTodo([...todo, input]);
    setInput("");
  };

  const deleteTodo = (index) => {
    const newTodos = [...todo];
    newTodos.splice(index, 1);
    setTodo(newTodos);
  };

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
  };

  const inputStyle = {
    marginBottom: "10px",
    padding: "8px",
    fontSize: "16px",
  };

  const buttonStyle = {
    padding: "10px",
    fontSize: "18px",
    backgroundColor: "#4CAF50",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  };

  const listItemStyle = {
    display: "flex",
    alignItems: "center",
    marginBottom: "10px",
    justifyContent: "space-between",
  };

  return (
    <div style={containerStyle}>
      <h1>Todo List</h1>
      <label htmlFor="input">Enter Task :</label>
      <input
        style={inputStyle}
        type="text"
        value={input}
        name="input"
        onChange={handleInput}
      />
      <button type="submit" style={buttonStyle} onClick={addTodos}>
        Submit
      </button>

      <ol>
        {todo.map((todo, index) => (
          <li key={index} style={listItemStyle}>
            {todo}
            <button style={buttonStyle} onClick={() => deleteTodo(index)}>
              Delete
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default New;
