import { useContext, useEffect } from "react";
import { TaskListContext } from "../contexts/TaskListContext";

const NewTaskInput = ({ setNewBtnVis }) => {
  const { taskList, setTaskList } = useContext(TaskListContext);

  const handleAddBtn = (e) => {
    e.preventDefault();
    const newTask = e.target.toDoInput.value;
    console.log("List previously: ", taskList);
    if (newTask) {
      setTaskList([...taskList, newTask]);
      console.log("New task list: ", taskList);
    } else {
      console.log("No task detail!!");
    }
    setNewBtnVis(true);
  };

  return (
    <>
      <form className="flex gap-3 items-center" onSubmit={handleAddBtn}>
        <label htmlFor="to-do-input" className="text-lg">
          Enter New Task:{" "}
        </label>
        <input
          type="text"
          name="toDoInput"
          id="to-do-input"
          className="border-2 px-3 py-1"
        />
        <br />
        <input
          type="submit"
          value="Add"
          className="border-2 px-5 py-2 font-semibold rounded-lg bg-gray-400 text-white hover:text-black hover:bg-gray-200"
        />
        {/* <div
          type="submit"
          className="border-2 py-2 w-1/3 hover:text-gray-400"
          onClick={handleAddBtn}
        >
          Add to list
        </div> */}
      </form>
    </>
  );
};

export default NewTaskInput;
