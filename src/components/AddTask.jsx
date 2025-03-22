import { useState } from "react";
import "./AddTask.CSS";
import { CirclePlus } from "lucide-react";
import InputText from "./InputText";

function AddTask({ CreateTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="AddTask">
      <h2>Adicionar Tarefa</h2>
      <InputText
        value={title}
        placeholder="Nome da Tarefa"
        onChange={(event) => setTitle(event.target.value)}
      />

      <InputText
        value={description}
        placeholder="Descrição da Tarefa"
        onChange={(event) => setDescription(event.target.value)}
      />
      <button
        className="btn-add"
        onClick={() => {
          if (!title.trim() || !description.trim()) {
            alert("Não é possível criar tarefa, preencha as informações!");
          } else {
            CreateTask(title, description);
            setTitle("");
            setDescription("");
            alert("Nova Tarefa foi Criada");
          }
        }}
      >
        <CirclePlus />
      </button>
    </div>
  );
}

export default AddTask;
