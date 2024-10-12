import { useEffect, useState } from "react";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import "./App.css";
import { v4 } from "uuid";
import TitlePage from "./components/TitlePage";

function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      if (task.id == taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    });
    setTasks(newTasks);
  }

  function deleteTask(taskId) {
    const newTask = tasks.filter((task) => taskId !== task.id);
    setTasks(newTask);
  }

  function createTask(title, description) {
    const newTask = {
      id: v4(),
      title,
      description,
      isCompleted: false,
    };
    setTasks([...tasks, newTask]);
  }

  return (
    <div className="box">
      <TitlePage />
      <AddTask CreateTask={createTask} />
      <Tasks
        tasks={tasks}
        TaskCompleted={onTaskClick}
        DeleteTask={deleteTask}
      />
    </div>
  );
}

export default App;
