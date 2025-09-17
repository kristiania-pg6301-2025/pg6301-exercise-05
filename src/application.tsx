import React, { useState } from "react";

export function Application() {
  const [tasks, setTasks] = useState([
    { description: "Something" },
    { description: "Something else" },
  ]);
  return (
    <>
      <h1>My Tasks</h1>
      <ul>
        {tasks.map((t) => (
          <li>{t.description}</li>
        ))}
      </ul>
      <h2>New task</h2>
      <form>
        <div>
          <input type="text" />
        </div>
        <button>Add task</button>
      </form>
    </>
  );
}
