import React, { useEffect, useState } from 'react';
import './style.css';

export default function App() {
  const [todos, setTodo] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/todos')
      .then((res) => res.json())
      .then((data) => {
        console.log(data.todos[0]);
        const list = data.todos;
        setTodo(list);
      });
  }, []);

  return (
    <>
      {todos.map((item, index) => {
        return (
          <div key={index}>
            <input type="checkBox" checked={item.completed} />
            <span>{item.todo}</span>
          </div>
        );
      })}
    </>
  );
}
