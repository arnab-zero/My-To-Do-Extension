const NewTaskInput = ({ setState }) => {

  const handleAddBtn = () => {
    setState(true);
  };

  return (
    <>
      <div className="flex gap-3 items-center">
        <label htmlFor="to-do-input" className="text-lg">
          Enter New Task Detail:{" "}
        </label>
        <input
          type="text"
          name="to-do-input"
          id="to-do-input"
          className="border-2 px-3 py-1"
        />
      </div>
      <div className="flex justify-center mt-3">
        <button
          type="submit"
          className="border-2 py-2 w-1/3 hover:text-gray-400"
          onClick={handleAddBtn}
        >
          Add to list
        </button>
      </div>
    </>
  );
};

export default NewTaskInput;
