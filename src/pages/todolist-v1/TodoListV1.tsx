import { FormEvent, useEffect, useState } from "react";

interface Item {
  id: number;
  name: string;
  lastName: string;
  status: number;
}

const TodoListV1 = () => {
  const [todos, setTodos] = useState<Item[]>([]);
  const [name, setName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [editName, setEditName] = useState<string>("");
  const [editLastName, setEditLastName] = useState<string>("");
  const [searchTodo, setSearchTodo] = useState<string>("");
  const [filterTodos, setFilterTodos] = useState<Item[]>([]);

  const addPerson = () => {
    const newTodo: Item = {
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
    const adjustedTodos = todos.map((todo) => {
      return todo.id === id ? { ...todo, status: 8 } : todo;
    });
    setTodos(adjustedTodos);
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const cancelTodo = (id: number) => {
    const adjustedTodos = todos.map((todo) => {
      return todo.id === id ? { ...todo, status: 1 } : todo;
    });
    setTodos(adjustedTodos);
    setEditName("");
    setEditLastName("");
  };

  const saveEditTodo = (id: number) => {
    const adjustedTodos = todos.map((todo) => {
      return todo.id === id
        ? { ...todo, name: editName, lastName: editLastName, status: 1 }
        : todo;
    });
    setTodos(adjustedTodos);
    setEditName("");
    setEditLastName("");
  };

  useEffect(() => {
    if (searchTodo.length < 3) return;
    const filteredTodos = todos.filter(
      (todo) =>
        todo.name.toLowerCase().includes(searchTodo.toLowerCase()) ||
        todo.lastName.toLowerCase().includes(searchTodo.toLowerCase())
    );
    setFilterTodos(filteredTodos);
  }, [searchTodo, todos]);

  const renderTodo = searchTodo.length === 0 ? todos : filterTodos;
const doneTodo = 'p-2 flex-grow'
  return (
    <>
      <div className="flex flex-col items-center min-h-screen bg-slate-50 mx-auto px-4 sm:px-10">
        <div className="text-3xl font-bold my-4">เพิ่มรายชื่อ</div>
        <div className="flex flex-col  items-center w-full p-4 border-2">
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center justify-around w-full">
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
              <label>นามสกุล</label>
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="form-input mt-1 block w-full"
              />
            </div>
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 sm:mt-0">
              Submit
            </button>
          </form>

          <div className="mt-5 w-full">
            <label>Search Box</label>
            <input
              type="text"
              placeholder="Search by name or last name..."
              className="form-input mt-1 block w-full text-center"
              value={searchTodo}
              onChange={(e) => setSearchTodo(e.target.value)}
            />
          </div>
          
          <div className="w-full overflow-x-auto mt-5">
            <div className="min-w-full bg-green-50">
              {renderTodo.map((list) => (
                <div key={list.id} className="flex  items-center justify-between p-2 bg-green-50 ">
                  {list.status === 8 ? (
                    <input
                      type="text"
                      value={editName}
                      onChange={(e) => setEditName(e.target.value)}
                      className="form-input"
                      placeholder="Enter name"
                    />
                  ) : (
                    <span className="p-2 flex-grow">{list.name}</span>
                  )}
                  {list.status === 8 ? (
                    <input
                      type="text"
                      value={editLastName}
                      onChange={(e) => setEditLastName(e.target.value)}
                      className="form-input"
                      placeholder="Enter last name"
                    />
                  ) : (
                    <span className={doneTodo}>{list.lastName}</span>
                  )}
                  <div className="flex space-x-2 flex-row w-1/5 justify-around">
                    {list.status === 8 ? (
                      <>
                        <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-1 px-4 rounded" onClick={() => saveEditTodo(list.id)}>Save</button>
                        <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-1 px-4 rounded" onClick={() => cancelTodo(list.id)}>Cancel</button>
                      </>
                    ) : (
                      <>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded" onClick={() => editTodo(list.id)}>Edit</button>
                        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-4 rounded" onClick={() => deleteTodo(list.id)}>Delete</button>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoListV1;
