import AddNewTask from "./components/AddNewTask";
import Task from "./components/Task";

function App() {
  return (
    <div className="w-[500px] px-5 py-4">
      <h1 className="text-2xl font-bold text-center p-5 mb-2">My To-Do List</h1>
      <div>
        <Task></Task>
        <Task></Task>
      </div>
      <div className="mt-8">
        <AddNewTask></AddNewTask>
      </div>
    </div>
  );
}

export default App;
