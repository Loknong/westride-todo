import TodoListCard from "@/components/card/TodoListCard";

const Playground = () => {
  return (
    <div className="mx-2 my-4">
      <div>Card Section</div>
      <TodoListCard firstName={"Test First Name"} lastName={"Test Last Name"} />
    </div>
  );
};

export default Playground;
