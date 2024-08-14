import Todo from "components/todo/Todo";
import { useLoaderData } from "react-router-dom";
import { getTodoAPI } from "services/todo";
import "styles/todo/TodoPage.scss";
const TodoPage = () => {
  const todoList = useLoaderData();

  return (
    <div className="todo-page-container">
      <Todo todo={todoList} />
    </div>
  );
};

export default TodoPage;

export const loader = async () => {
  const res = await getTodoAPI();

  if (res) return Object.values(res);
  return [];
};
