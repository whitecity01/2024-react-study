import TodoItem from './TodoItem';
import './TodoList.scss';

const TodoList = ({todoList, onDelete, onToggle}) =>{

    return(
        <div className='todo-list-container'>
            {todoList.map((todo) =>( // todoList 순회하며 todoItem 생성
                <TodoItem todo={todo} key={todo.index} onDelete={onDelete} onToggle={onToggle}/>
            ))}

        </div>
    );
};

export default TodoList;