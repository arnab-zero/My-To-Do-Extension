import { useState } from "react";
import FrontView from "./components/FrontView";
import { TaskListContext } from "./contexts/TaskListContext";

function App() {
  const [taskList, setTaskList] = useState([]);

  return (
    <div>
      <TaskListContext.Provider value={{ taskList, setTaskList }}>
        <FrontView />
      </TaskListContext.Provider>
    </div>
  );
}

export default App;
