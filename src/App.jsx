import './App.css'
import CountTask from './components/CountTask/CountTask'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Fotter'
import CustomerTicket from './components/CustomerTicket/CustomerTicket'




function App() {
  return (
    <div className='bg-white w-full'>
      <Navbar></Navbar>
      <CountTask></CountTask>
      
        <CustomerTicket  />
     
      <Footer></Footer>
    </div>
  )
}

export default App
