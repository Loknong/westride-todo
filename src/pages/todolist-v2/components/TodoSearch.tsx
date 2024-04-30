import { useTodos } from '../context/TodoContext';

const TodoSearch = () => {
  const { setSearchTerm } = useTodos();

  return (
    <div className="mt-5 w-full">
      <input
        type="text"
        placeholder="Search by name or last name..."
        onChange={(e) => setSearchTerm(e.target.value)}
        className="form-input mt-1 block w-full text-center"
      />
    </div>
  );
};

export default TodoSearch;
