import './App.css'
import AddTodo from './components/addTodo'
import Todos from './components/todos'

function App() {

  return (
    <div>
      <div className='bg-red-500'> Learn About  redux toolkit</div>
      <AddTodo/> 
      <Todos/> 
    </div>
  )
}

export default App
