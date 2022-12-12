import { Todo } from './Todo';

export const TodoList = ({todos = [], onDeleteTodo, onToggleTodo}) => {


    return (
        <ul className="list-group">
            {
                todos.map(todo => (
                    <Todo 
                        key={todo.id} 
                        todo={todo} 
                        onDeleteTodo={onDeleteTodo}
                        onToggleTodo={onToggleTodo}
                    />
                ))
            }
        </ul>
    )
}
