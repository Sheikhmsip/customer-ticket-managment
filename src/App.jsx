import './App.css'
import CountTask from './components/CountTask/CountTask'
import Navbar from './components/Navbar/Navbar'

function App() {

  return (
    <div className='bg-white  md:w-10/12 mx-auto  '>
      <Navbar></Navbar>
      <CountTask></CountTask>
    </div>
  )
}

export default App
