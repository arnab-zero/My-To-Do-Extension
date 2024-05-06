import AddNewTask from "./AddNewTask";
import Task from "./Task";

const FrontView = () => {
  return (
    <div>
      <div className="w-[500px] px-5 py-4">
        <h1 className="text-2xl font-bold text-center p-5 mb-2">
          My To-Do List
        </h1>
        <div>
          <Task></Task>
          <Task></Task>
        </div>
        <div className="mt-8">
          <AddNewTask></AddNewTask>
        </div>
      </div>
    </div>
  );
};

export default FrontView;
