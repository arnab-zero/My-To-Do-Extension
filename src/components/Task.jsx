import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import { MdOutlineCancel } from "react-icons/md";

const Task = () => {
  return (
    <div className="flex justify-between gap-4 items-center border-2 rounded-xl px-2 py-3 mb-2">
      <div>
        <p className="text-justify leading-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
          deleniti nobis soluta exercitationem temporibus recusandae! Maxime
          molestiae maiores quasi quis.
        </p>
        <p className="text-xs font-light text-slate-500 pt-3">
          Added on monday; 04th july 2023; 01:19pm
        </p>
      </div>
      <div className="flex gap-2">
        <button>
          <IoCheckmarkDoneCircleOutline className="text-2xl" />
        </button>
        <button>
          <MdOutlineCancel className="text-2xl" />
        </button>
      </div>
    </div>
  );
};

export default Task;
