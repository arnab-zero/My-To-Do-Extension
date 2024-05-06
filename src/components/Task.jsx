import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import { MdOutlineCancel } from "react-icons/md";

const Task = () => {
  return (
    <div className="flex justify-between gap-4 items-center border-2 rounded-xl px-2 py-3 mb-2">
      <div>
        <p className="text-justify leading-5">
          Task Detail
        </p>
        <p className="text-xs font-light text-slate-500 pt-3">
          Added on monday; 04th july 2023; 01:19pm
        </p>
      </div>
      <div className="flex gap-2">
        <button className="tooltip" data-tip="Mark as done">
          <IoCheckmarkDoneCircleOutline className="text-2xl" />
        </button>
        <button className="tooltip" data-tip="Remove from list">
          <MdOutlineCancel className="text-2xl" />
        </button>
      </div>
    </div>
  );
};

export default Task;
