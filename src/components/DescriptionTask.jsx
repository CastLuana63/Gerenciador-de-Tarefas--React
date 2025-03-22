import {} from "react";
import "./Task.CSS";

import { X } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";

function DescriptionTask() {
  const [acharParametros] = useSearchParams();
  const title = acharParametros.get("title");
  const description = acharParametros.get("description");

  const navigation = useNavigate();

  return (
    <div className="TaskBox">
      <div className="info">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <button className="back" onClick={() => navigation(-1)}>
        <X />
      </button>
    </div>
  );
}

export default DescriptionTask;
