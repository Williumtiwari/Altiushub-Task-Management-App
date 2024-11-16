import { useState } from "react";
import { Link } from "react-router-dom";

export default function DashboardPage() {
  const [title, setTitle] = useState("");
  const [tasks, setTasks] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editTitle, setEditTitle] = useState("");
  const addTask = (e) => {
    e.preventDefault();
    if (title.trim()) {
      setTasks([...tasks, { title: title, id: Date.now() }]);
      setTitle("");
    }
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const startEditTask = (id, text) => {
    setEditTitle(text);
    setEditIndex(id);
  };

  const saveEditedTask = (task) => {
    setTasks(
      tasks.map((task) =>
        task.id === editIndex ? { ...task, title: editTitle } : task
      )
    );
    setEditIndex(null);
    setEditText("");
  };
  console.log(tasks);
  return (
    <div style={{ textAlign: "center", width: "100%" }}>
      <h1>Task Management APP</h1>
      <div
        style={{
          margin: "0px auto",
          width: "50%",
          textAlign: "center",
        }}>
        Tasks
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "1rem",
          margin: "0px auto",
          justifyContent: "space-around",
          marginTop: "10px",
          width: "50%",
        }}>
        <input
          type="text"
          placeholder="Task title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button onClick={addTask}>Add Task</button>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "50%",
          margin: "0px auto",
          gap: "1rem",
          marginTop: "10px",
        }}>
        {tasks.map((task) => (
          <div
            key={task.id}
            style={{
              background: "#000000",
              color: "#fff",
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              padding: "10px",
              borderRadius: "10px",
            }}>
            {task.title}
            <div style={{ display: "flex", gap: "1rem" }}>
              <button onClick={() => startEditTask(task.id, task.title)}>
                Edit
              </button>
              <button onClick={() => deleteTask(task.id)}>Delete</button>
            </div>
          </div>
        ))}
        {editIndex !== null && (
          <div style={{ display: "flex", gap: "1rem", margin: "0px auto" }}>
            <input
              type="text"
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
            />
            <button onClick={() => saveEditedTask(editIndex, editTitle)}>
              Save
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
