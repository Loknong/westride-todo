import { useState } from 'react';
import { Item } from '../interface';
import { useTodos } from '../context/TodoContext';

const TodoItem = ({ todo }: { todo: Item }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editName, setEditName] = useState(todo.name);
  const [editLastName, setEditLastName] = useState(todo.lastName);
  const { editTodo, deleteTodo } = useTodos();

  const handleSave = () => {
    editTodo(todo.id, editName, editLastName);
    setIsEditing(false);
  };

  return (
    <div className="flex items-center justify-between p-2 bg-green-50">
      {isEditing ? (
        <>
          <input
            type="text"
            value={editName}
            onChange={(e) => setEditName(e.target.value)}
            className="form-input"
            placeholder="Enter name"
          />
          <input
            type="text"
            value={editLastName}
            onChange={(e) => setEditLastName(e.target.value)}
            className="form-input"
            placeholder="Enter last name"
          />
        </>
      ) : (
        <>
          <span className="p-2 flex-grow">{todo.name}</span>
          <span className="p-2 flex-grow">{todo.lastName}</span>
        </>
      )}
      <div className="flex space-x-2 flex-row w-1/5 justify-around">
        {isEditing ? (
          <>
            <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-1 px-4 rounded" onClick={handleSave}>Save</button>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-1 px-4 rounded" onClick={() => setIsEditing(false)}>Cancel</button>
          </>
        ) : (
          <>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded" onClick={() => setIsEditing(true)}>Edit</button>
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-4 rounded" onClick={() => deleteTodo(todo.id)}>Delete</button>
          </>
        )}
      </div>
    </div>
  );
};

export default TodoItem;
