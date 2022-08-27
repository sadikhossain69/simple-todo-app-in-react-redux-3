import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import DoubleTick from '../assets/double-tick.png'
import Plus from '../assets/plus.png'
import { added, allCompleted, clearCompleted } from '../redux/todos/actions';

const Header = () => {

    const [input, setInput] = useState('')
    const dispatch = useDispatch()

    const handleInput = e => {
        setInput(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault()
        dispatch(added(input))
        setInput('')
    }

    const completeHandler = () => {
        dispatch(allCompleted())
    }

    const clearHandler = () => {
        dispatch(clearCompleted())
    }

    return (
        <>
            <div>
                <form onSubmit={handleSubmit}
                    className="flex items-center bg-gray-100 px-4 py-4 rounded-md"
                >
                    <img
                        src={DoubleTick}
                        className="w-6 h-6"
                        alt="Add todo"
                    />
                    <input
                        type="text"
                        placeholder="Type your todo"
                        className="w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500"
                        value={input}
                        onChange={handleInput}
                    />
                    <button
                        type="submit"
                        class={`appearance-none w-8 h-8 bg-[url(${Plus})] bg-no-repeat bg-contain`}
                    ></button>
                </form>

                <ul className="flex justify-between my-4 text-xs text-gray-500">
                    <li className="flex space-x-1 cursor-pointer" onClick={completeHandler}>
                        <img
                            className="w-4 h-4"
                            src={DoubleTick}
                            alt="Complete"
                        />
                        <span>Complete All Tasks</span>
                    </li>
                    <li className="cursor-pointer" onClick={clearHandler}>Clear completed</li>
                </ul>
            </div>
        </>
    );
};

export default Header;