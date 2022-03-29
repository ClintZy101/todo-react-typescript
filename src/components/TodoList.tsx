import React from 'react'
import { Todo } from '../models/model'
import { SingleTodo } from './SingleTodo'

interface Props {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Array<Todo>>>;
}

export const TodoList: React.FC<Props> = ({ todos, setTodos }) => {
    return (
        <div>
            {
                todos.map((todo, index) => (
                    <SingleTodo 
                    index={index}
                    todo={todo}
                    todos={todos}
                    key={todo.id}
                    setTodos={setTodos}
                    />
                ))
            }

        </div>
    )
}
