
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { Increment , Decrement} from './redux/counterAction'


function App() {
  const dispatch = useDispatch()
  const counter = useSelector(state => state.counter)

  return (
    <div className='counter_app'>
      <h1>Counter Application</h1>
      <div className='counter'>
          <button className='increment' onClick={() => dispatch(Increment())}>Increment</button>    
          <h1>{counter}</h1>   
           <button className='decrement' onClick={() => dispatch(Decrement())}>Decrement</button>
      </div>     
    </div>
  )
}

export default App
