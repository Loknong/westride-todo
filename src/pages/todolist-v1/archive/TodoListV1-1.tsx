import { FormEvent, useEffect, useState } from "react";

interface item {
  id: number;
  name: string;
  lastName: string;
  status: number;
}

const TodoListV1 = () => {
  const [todos, setTodos] = useState<item[]>([]);

  const [name, setName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [editName, setEditName] = useState<string>("");
  const [editLastName, setEditLastName] = useState<string>("");
  const [searchTodo, setSearchTodo] = useState<string>("");
  const [filterTodos, setFilterTodos] = useState<item[]>([]);
  const addPerson = () => {
    const newTodo: item = {
      id: +new Date(),
      name: name,
      lastName: lastName,
      status: 1,
    };
    setTodos([...todos, newTodo]);
    setName("");
    setLastName("");
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    addPerson();
  };

  const editTodo = (id: number) => {
    const adjustTodo = todos.map((todo) => {
      return todo.id === id ? { ...todo, status: 8 } : todo;
    });

    setTodos(adjustTodo);
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const cancelTodo = (id: number) => {
    const adjustTodo = todos.map((todo) => {
      return todo.id === id ? { ...todo, status: 1 } : todo;
    });

    setTodos(adjustTodo);
    setEditName("");
    setEditLastName("");
  };

  const saveEditTodo = (id: number) => {
    const adjustTodo = todos.map((todo) => {
      return todo.id === id
        ? { ...todo, name: editName, lastName: editLastName, status: 1 }
        : todo;
    });

    setTodos(adjustTodo);
    setEditName("");
    setEditLastName("");
  };

  useEffect(() => {
    if (searchTodo.length < 3) return;
    const todoFilter = todos.filter(
      (todo) =>
        todo.name.toLowerCase().includes(searchTodo.toLowerCase()) ||
        todo.lastName.toLowerCase().includes(searchTodo.toLowerCase())
    );
    setFilterTodos(todoFilter);
  }, [searchTodo, todos]);

  const displayTodos = searchTodo.length < 3 ? todos : filterTodos;

  return (
    <div className="flex flex-col  items-center h-screen bg-slate-50 w-4/5 m-auto  px-10">
      <div className="text-3xl font-bold my-2">เพิ่มรายชื่อ</div>
      <div className="flex flex-col justify-center items-center w-full border-solid  border-2">
        <form
          onSubmit={handleSubmit}
          className="flex flex-row justify-around w-3/4"
        >
          <div>
            <label>ชื่อ</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-gray-200"
            />
          </div>

          <div>
            <label htmlFor="">นามสกุล</label>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="bg-gray-200"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 rounded"
          >
            Submit
          </button>
        </form>
        <div className="mt-5">
          Search Box
          <label> Search Box</label>
          <input
            className="bg-gray-200"
            type="text"
            placeholder="Put your key word"
            style={{ textAlign: "center" }}
            value={searchTodo}
            onChange={(e) => {
              return setSearchTodo(e.target.value);
            }}
          />
        </div>
        <div className="my-5"></div>
        {displayTodos.map((list, key) => {
          return (
            <div
              key={key}
              className="flex flex-row bg-green-50 w-full justify-between my-1 mx-10"
            >
              {list.status === 1 && (
                <li className="flex-grow bg-green-300">
                  {list.name} {list.lastName}
                </li>
              )}
              {list.status === 8 && (
                <li className="flex-grow bg-green-300 flex flex-row">
                  <div>
                    <input
                      type="text"
                      value={editName}
                      onChange={(e) => setEditName(e.target.value)}
                      className="bg-gray-200"
                      placeholder={list.name}
                    />
                  </div>

                  <div>
                    <input
                      type="text"
                      value={editLastName}
                      onChange={(e) => setEditLastName(e.target.value)}
                      className="bg-gray-200"
                      placeholder={list.lastName}
                    />
                  </div>
                </li>
              )}
              {list.status === 1 && (
                <div className="flex flex-row justify-end  w-1/4 ">
                  <button
                    className="border-solid border-2 border-black px-4 mx-2 rounded"
                    onClick={() => editTodo(list.id)}
                  >
                    Edit
                  </button>
                  <button
                    className="border-solid border-2 border-black px-4  mx-1 rounded"
                    onClick={() => deleteTodo(list.id)}
                  >
                    Delete
                  </button>
                </div>
              )}
              {list.status === 8 && (
                <div className="flex flex-row justify-end  w-1/4 ">
                  <button
                    className="border-solid border-2 border-black px-4 mx-2 rounded"
                    onClick={() => saveEditTodo(list.id)}
                  >
                    Save
                  </button>
                  <button
                    className="border-solid border-2 border-black px-4  mx-1 rounded"
                    onClick={() => cancelTodo(list.id)}
                  >
                    Cancel
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TodoListV1;
