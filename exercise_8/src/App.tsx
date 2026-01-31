import { useState } from "react";
import Counter from "./Counter";

interface User {
  username: string;
  email: string;
}

interface Todo {
  id: number;
  task: string;
  done: boolean;
}

function App() {
  const [user, setUser] = useState<User | null>(null);
  const [todo, setTodo] = useState<Todo[]>([]);

  return (
    <>
      <button
        onClick={() =>
          setUser({ username: "Sadiya", email: "sadiya@example.com" })
        }
      >
        Add Data
      </button>
      <p>{user?.username}</p>
      <p>{user?.email}</p>

      <Counter />

      <br />
      <button
        onClick={() =>
          setTodo([{ id: 1234, task: "Walk 8k steps", done: true }])
        }
      >
        Add Task
      </button>

      <div>
        {todo?.map((task) => (
          <div key={task.id}>
            <p>{task.task}</p>
            <p>is completed: {task.done ? "true" : "false"}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
