import React, { useState } from 'react'
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import './Todo.css'


const TodoList = ({ todo, delete_todo, updated_todo, complete_todo }) => {

    let [toggle, setToggle] = useState(false)
    let [todoItem, setTodoItem] = useState("")
    let [todoId, setTodoId] = useState(0)
    const toggleModel = (item, id) => {
        setToggle(true)
        setTodoItem(item)
        setTodoId(id)
    }
    
    return (
        <>
            <div className="todo-list w-full">
                {todo.map(items =>
                    <div className="todo-list-item flex justify-between">
                        <div className="task flex justify-center">
                            <input type="checkbox"  onChange={(e) => complete_todo(e,items.id)} />
                            <p id='t_task' className={items.status == "Completed"? "strike text-center pt-4 px-4 font-bold text-white border-b" : "text-center pt-4 px-4 font-bold text-white border-b"} >{items.task}</p>
                        </div>
                        <div className="btn-container  flex justify-between">
                            <div className="edit" onClick={() => toggleModel(items.task, items.id)}><FaEdit /></div>
                            <div className="del" onClick={() => delete_todo(items.id)}><MdDelete /></div>
                        </div>
                    </div>
                )}
            </div>
            {/* text-center pt-4 px-4 font-bold text-white border-b */}

            {toggle && <div className=" w-full  p-2   rounded-lg mt-4  edit-main ">
                <div className="modal-container">
                    <div className="modal">
                        <h2 className='font-mono text-xl'>Upadate Form</h2>
                        <form action="" onSubmit={() => {
                            updated_todo(todoId,todoItem)
                            setToggle(false)
                        }}>
                            <textarea name="" id="" cols="" rows="5" placeholder='Update todo' value={todoItem} onChange={(e) => setTodoItem(e.target.value)} className='p-2 font-mono rounded w-full' required></textarea>
                            {/* <input type="text" name="" id="" className='search'  placeholder='Update todo'  value={todoItem} onChange={(e)=> setTodoItem(e.target.value)}  required  /> */}

                            <div className="btn-container flex justify-between">
                                <button id="add" className='cancel mod-btn mt-3'>Add</button>
                                <button className="cancel mod-btn mt-3" onClick={() => setToggle(false)}>Cancel</button>
                            </div>
                        </form>



                    </div>
                </div>
            </div>}

        </>
    )
}

export default TodoList