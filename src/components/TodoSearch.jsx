import React from 'react'
import { useForm } from 'react-hook-form'
import './Todo.css'

const TodoSearch = ({add_Todo}) => {
    
  const {register,handleSubmit,reset,formState:{errors}} = useForm()

  return (
    <div className="todo-search ">
        <form action="" className='flex justify-between' onSubmit={handleSubmit((data) => {
          add_Todo(data)
          reset()
        })}>
            <input type="text" name="" placeholder='Enter your Todos' id="" className='search ' {...register("task",{required:true})} />
            <button className='text-red-700'>Add</button>
        </form>
        {errors.task?.type == "required" && <small className='text-red-700 font-bold font-mono  '>This field cannot be blank</small>}
    </div>
  )
}

export default TodoSearch