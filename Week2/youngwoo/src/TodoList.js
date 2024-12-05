import TodoListItem from './ToDoListItem'
import './TodoList.css';

function TodoList({todos, setTodos}) {
  const checking = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    );
  };

  const remove = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }
    
    return (
      <div className="list">
        {todos.map((todo) => (
        <TodoListItem 
          key={todo.id} 
          todo={todo} 
          checking={checking} 
          remove={remove} 
        />
      ))}
      </div>
    );
  }
  
  export default TodoList;