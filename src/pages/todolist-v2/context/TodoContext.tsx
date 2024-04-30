import { ReactNode, createContext, useContext, useState } from "react";
import { Item } from "../interface";

interface TodoContextType {
  todos: Item[];
  filterTodos: Item[];
  addTodo: (name: string, lastName: string) => void;
  editTodo: (id: number, name: string, lastName: string) => void;
  deleteTodo: (id: number) => void;
  setSearchTerm: (searchTerm: string) => void;
  searchTerm: string;
}

export const TodoContext = createContext<TodoContextType | undefined>(
  undefined
);

// eslint-disable-next-line react-refresh/only-export-components
export const useTodos = () => {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error("useTodos must be used within a TodoProvider");
  }
  return context;
};

interface TodoProviderProps {
  children: ReactNode;
}

export const TodoProvider: React.FC<TodoProviderProps> = ({ children }) => {
  const [todos, setTodos] = useState<Item[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const addTodo = (name: string, lastName: string) => {
    const newTodo: Item = { id: +new Date(), name, lastName, status: 1 };
    setTodos([...todos, newTodo]);
  };

  const editTodo = (id: number, name: string, lastName: string) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, name, lastName, status: 1 } : todo
    );
    setTodos(updatedTodos);
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const filterTodos = todos.filter(
    (todo) =>
      todo.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      todo.lastName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <TodoContext.Provider
      value={{
        todos,
        filterTodos,
        addTodo,
        editTodo,
        deleteTodo,
        setSearchTerm,
        searchTerm
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
