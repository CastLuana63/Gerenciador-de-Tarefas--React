import { ChevronRightIcon, Trash2 } from "lucide-react";
import "./Task.CSS";
import { useNavigate } from "react-router-dom";

function Tasks({ tasks, TaskCompleted, DeleteTask }) {
  const navigation = useNavigate();

  function onDescription(Tarefa) {
    const query = new URLSearchParams();
    query.set("title", Tarefa.title);
    query.set("description", Tarefa.description);
    navigation(`/task?${query.toString()}`);
  }

  return (
    <div className="TaskBox">
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <button
              onClick={() => TaskCompleted(task.id)}
              className={`btn ${task.isCompleted ? "line-through" : ""}`}
            >
              {task.title}
            </button>
            <button onClick={() => onDescription(task)}>
              <ChevronRightIcon />
            </button>
            <button onClick={() => DeleteTask(task.id)}>
              <Trash2 />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Tasks;
