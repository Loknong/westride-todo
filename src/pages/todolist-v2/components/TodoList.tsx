import { useTodos } from "../context/TodoContext";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const { todos, filterTodos, searchTerm } = useTodos();
  const renderTodo = searchTerm ? filterTodos : todos;
  return (
    <div className="w-full overflow-x-auto mt-5">
      <div className="min-w-full bg-green-50">
        {renderTodo.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
