import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Todo from './Todo';
import { useDispatch } from 'react-redux';
import fetchTodos from '../redux/todos/thunk/fetchTodos';

const Todolist = () => {

    const todos = useSelector((state => state.todos))
    const filters = useSelector(state => state.filters)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchTodos)
    }, [dispatch])

    return (
        <>
            <div
                className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto"
            >
                {
                    todos
                        .filter(todo => {
                            const { status } = filters
                            switch (status) {
                                case 'Complete':
                                    return todo.completed

                                case 'Incomplete':
                                    return !todo.completed

                                default:
                                    return true
                            }
                        })
                        .filter(todo => {
                            const { colors } = filters
                            if (colors.length > 0) {
                                return colors.includes(todo?.color)
                            }
                            return true
                        })
                        .map(todo => <Todo
                            key={todo.id}
                            todo={todo}
                        />)
                }
            </div>
        </>
    );
};

export default Todolist;