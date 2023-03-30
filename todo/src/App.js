import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Todo from "./components/Todo";

function App() {
  const [todos, setTodos] = useState([]);

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/incomplete">Incomplete Todos</Link>
            </li>
            <li>
              <Link to="/completed">Completed Todos</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/completed" element={<Todo todos={todos} setTodos={setTodos} showCompleted={true} />} />
          <Route path="/" element={<Todo todos={todos} setTodos={setTodos} showCompleted={false} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
