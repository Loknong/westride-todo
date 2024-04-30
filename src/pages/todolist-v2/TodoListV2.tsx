import { TodoProvider } from "./context/TodoContext";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import TodoSearch from "./components/TodoSearch";

const TodoListV2 = () => {
  return (
    <TodoProvider>
      <div className="flex flex-col items-center min-h-screen bg-slate-50 mx-auto px-4 sm:px-10">
        <div className="text-3xl font-bold my-4">เพิ่มรายชื่อ</div>
        <div className="className=flex flex-col  items-center w-full p-4 border-2">
          <TodoForm />
          <TodoSearch />
          <TodoList />
        </div>
      </div>
    </TodoProvider>
  );
};

export default TodoListV2;
