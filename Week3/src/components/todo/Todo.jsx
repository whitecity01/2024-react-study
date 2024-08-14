import TodoInput from "components/todo/TodoInput";
import TodoList from "components/todo/TodoList";
import TodoTitle from "components/todo/TodoTitle";
import { useState } from "react";
import { addTodoAPI, deleteTodoAPI, updateTodoAPI } from "services/todo";
import "styles/todo/Todo.scss";

const Todo = ({ todo }) => {
  const [todoList, setTodoList] = useState(todo);

  const addTodo = async (newTodo) => {
    const newId = Date.now();
    const new_todo = {
      id: newId,
      text: newTodo,
      done: false,
    };
    setTodoList((prev) => [...prev, new_todo]);
    await addTodoAPI(newId, new_todo);
  };

  const updateTodo = async (id) => {
    setTodoList(
      todoList.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );

    const findTodo = todoList.find((todo) => todo.id === id);
    const todo = { done: !findTodo.done };
    await updateTodoAPI(id, todo);
  };

  const deleteTodo = async (id) => {
    setTodoList(todoList.filter((todo) => todo.id !== id));
    await deleteTodoAPI(id);
  };

  return (
    <div className="todo-container">
      <TodoTitle />
      <TodoInput setTodoList={setTodoList} addTodo={addTodo} />
      <TodoList
        todoList={todoList}
        setTodoList={setTodoList}
        updateTodo={updateTodo}
        deleteTodo={deleteTodo}
      />
    </div>
  );
};

export default Todo;
