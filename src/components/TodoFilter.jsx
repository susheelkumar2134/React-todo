import React from 'react'
import './Todo.css'

const TodoFilter = ({filter_todo}) => {
  return (
    <div className="div ">
        <select name="" id="" className='search w-full my-2' onChange={(e) => filter_todo(e.target.value)}>
            <option value="Active">Active</option>
            <option value="Completed">Completed</option>
        </select>
    </div>
  )
}

export default TodoFilter