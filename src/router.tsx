import { Routes, Route } from "react-router-dom";

import Home from "@/pages/home/Home";
import TodoV1 from "@/pages/todolist-v1/";
import TodoV2 from "@/pages/todolist-v2";
import TodoV3 from "@/pages/todolist-v3";
import Playground from "@/pages/playgroud";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/todo-v1" element={<TodoV1 />} />
      <Route path="/todo-v2" element={<TodoV2 />} />
      <Route path="/todo-v3" element={<TodoV3 />} />
      <Route path="/playground" element={<Playground />} />
    </Routes>
  );
};

export default Router;
