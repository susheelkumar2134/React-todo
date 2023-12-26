import { useState } from 'react'
import TodoSearch from './components/TodoSearch'
import TodoFilter from './components/TodoFilter'
import TodoList from './components/TodoList'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './components/Todo.css'
import './App.css'



function App() {
  const [todos,setTodos] = useState([
    {id:0,task:"Learn JavaScript",status:"Active"},
    {id:1,task:"Read a self-help book",status:"Active"},
    {id:2,task:"Play PS",status:"Active"},
    {id:3,task:"Learn after Django",status:"Active"}
  ])

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id ))
  }

  const addTodo = (data) => {
    setTodos( [...todos, data={ id:parseInt(todos[todos.length-1].id ) + 1 ,...data, status:"Active"}])
  }

  const updateTodo = (id,new_task) => {
    let todo = todos[id]
    let updatedTodo={...todo,task:new_task,status:"Active"}
    setTodos(todos.map((t) => t.id == id ? updatedTodo : t ))
  }

  let completeTodo = (ed, id)=> {
    if(ed.target.checked){
      setTodos(todos.map(todo => todo.id == id ? {...todo,status:"Completed"}: todo))
    }
    else{
      setTodos(todos.map(todo => todo.id == id ? {...todo,status:"Active"}: todo))
    }
  } 
  let filterTodo =(text)=>{
    console.log(text)
    setTodos(todos.filter(todo => todo.status === text))
  }
  return (
    <>
    <div className="todo-wrapper rounded-xl  " >
    <div className="p-4  rounded-lg">
      <TodoSearch add_Todo={addTodo}/>
      <TodoFilter filter_todo={filterTodo}/>
      <TodoList  todo={todos} delete_todo={deleteTodo} updated_todo={updateTodo} complete_todo={completeTodo}  />
      </div>
      </div>
    </>
  )
}

export default App
