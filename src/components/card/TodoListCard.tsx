type Props = {
  firstName: string;
  lastName: string;
};

const TodoListCard = (props: Props) => {
  const { firstName, lastName } = props;
  return (
    <div className="w-1/5 h-16 flex flex-col border-2">
      <div className="w-full">{firstName}</div>
      <div className="w-full">{lastName}</div>
    </div>
  );
};

export default TodoListCard;
