import { useState } from "react";
import { useTodos } from "../context/TodoContext";

const TodoForm = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const { addTodo } = useTodos();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    addTodo(name, lastName);
    setName("");
    setLastName("");
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row items-center justify-around w-full"
      >
        <div className="mb-3 sm:mb-0">
          <label>ชื่อ</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-input mt-1 block w-full"
          />
        </div>
        <div className="mb-3 sm:mb-0">
          <label htmlFor="">นามสกุล</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="form-input mt-1 block w-full"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 sm:mt-0"
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default TodoForm;
