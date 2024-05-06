import { useState } from "react";
import NewTaskInput from "./NewTaskInput";

const AddNewTask = () => {
  const [newBtnVis, setNewBtnVis] = useState(true);

  const handleNewBtnClick = () => {
    setNewBtnVis(false);
  };

  return (
    <>
      <div
        className={`flex justify-center ${newBtnVis ? "visible" : "hidden"}`}
      >
        <button
          className="font-semibold border-[3px] border-dashed rounded-3xl py-2 px-6 hover:text-gray-500"
          onClick={handleNewBtnClick}
        >
          +Add New Task
        </button>
      </div>

      <div className={`${newBtnVis ? "hidden" : "visible"}`}>
        <NewTaskInput setNewBtnVis={setNewBtnVis}></NewTaskInput>
      </div>
    </>

    // <div className="px-28">
    //     <h3 className="font-semibold border-dashed border-[3px] rounded-3xl py-2 text-center">+ Add New Task</h3>
    // </div>
  );
};

export default AddNewTask;
