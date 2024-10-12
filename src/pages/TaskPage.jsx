import DescriptionTask from "../components/DescriptionTask";
import "../App.css";
import TitlePage from "../components/TitlePage";

function TaskPage() {
  return (
    <div>
      <TitlePage />
      <div className="box">
        <DescriptionTask />
      </div>
    </div>
  );
}

export default TaskPage;
