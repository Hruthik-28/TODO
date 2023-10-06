import { useState } from "react";
import { useTodo } from "../contexts/TodoContext";

function TodoForm() {
    const [todo, setTodo] = useState('')
    const [errorMsg, setErrMsg] = useState('')
    const {addTodo} = useTodo()

    const add = (e) => {
        e.preventDefault()
        if(!todo) {
            return setErrMsg('Please Enter Your Todo !!')
        }
        addTodo({todo, completed: false})
        setTodo('')
        setErrMsg('')
    }

    return (
        <>
            <form onSubmit={add} className="flex">
                <input
                    type="text"
                    placeholder="Write Todo..."
                    className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                    value={todo}
                    onChange={(e) => setTodo(e.target.value) }
                />
                <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                    Add
                </button>
            </form>
            {errorMsg && <p className="text-red-500 mr-2 flex-wrap text-center mt-1">{errorMsg}</p>}
        </>
    );
}

export default TodoForm;

