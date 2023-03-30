import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Todo from './pages/Todo';

function App() {
  const [incompleteList, setIncompleteList] = useState([]);
  const [completedList, setCompletedList] = useState([]);
  const [newItemTitle, setNewItemTitle] = useState('');

  const handleAddItem = () => {
    if (newItemTitle.trim()) {
      setIncompleteList([...incompleteList, { id: Math.random(), title: newItemTitle }]);
      setNewItemTitle('');
    }
  };

  const handleMarkComplete = (item) => {
    setIncompleteList(incompleteList.filter((i) => i.id !== item.id));
    setCompletedList([...completedList, item]);
  };

  const handleMarkIncomplete = (item) => {
    setCompletedList(completedList.filter((i) => i.id !== item.id));
    setIncompleteList([...incompleteList, item]);
  };

  return (
    <Router>
      <div className="App">
        <header>
          <ul>
            <li><Link to="/incomplete">Incomplete</Link></li>
            <li><Link to="/completed">Completed</Link></li>
            <input type="text" value={newItemTitle} onChange={(e) => setNewItemTitle(e.target.value)} />
            <button onClick={handleAddItem}>Add Item</button>
          </ul>
        </header>
        <main>
          <Routes>
            <Route
              exact
              path="/incomplete"
              element={<Incomplete items={incompleteList} onMarkComplete={handleMarkComplete} />}
            />
            <Route
              exact
              path="/completed"
              element={<Completed items={completedList} onMarkIncomplete={handleMarkIncomplete} />}
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

function Incomplete({ items, onMarkComplete }) {
  return (
    <div>
      <h1>Incomplete</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <input
              type="checkbox"
              checked={false}
              onChange={() => onMarkComplete(item)}
            />
            {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Completed({ items, onMarkIncomplete }) {
  return (
    <div>
      <h1 className="completed">Completed</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <input
              type="checkbox"
              checked={true}
              onChange={() => onMarkIncomplete(item)}
            />
            {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
