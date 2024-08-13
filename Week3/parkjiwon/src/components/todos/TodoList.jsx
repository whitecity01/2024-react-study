import TodoItem from './TodoItem';
import '../../styles/todos/TodoList.scss';

const TodoList = ({todoList, onDelete, onToggle, onEdit}) =>{

    return(
        <div className='todo-list-container'>
            {todoList.length === 0 ? ( // todoList가 비어있는 경우
                <div className='empty-box'>목록이 없습니다</div>
            ) : (
                todoList.map((todo) => ( // todoList가 비어있지 않은 경우
                <TodoItem
                    todo={todo}
                    key={todo.id}
                    onDelete={onDelete}
                    onToggle={onToggle}
                    onEdit={onEdit}
                />
                ))
            )}
        </div>

    );
};

export default TodoList;