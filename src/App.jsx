import './App.css'
import CountTask from './components/CountTask/CountTask'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Fotter'
import CustomerTicket from './components/CustomerTicket/CustomerTicket'
import { Suspense, useState } from 'react'


const fatchTickets = async () => {
  try {
    const response = await fetch('/tickets.json');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching tickets:', error);
    throw error;
  }
};

function App() {

  const ticketsPromise = fatchTickets();

  const [inProgressTasks, setInProgressTasks] = useState([]);

    const handleAddTask = (ticket) => {
    setInProgressTasks([...inProgressTasks, ticket]);
  };
 
  return (
    <div className='bg-white w-full'>
      <Navbar></Navbar>
      <CountTask 
      inProgressTasks={inProgressTasks}
      ></CountTask>
      <Suspense fallback={<div className='text-center text-2xl text-[#34485A] font-semibold'>Loading Tickets...</div>}>

        <CustomerTicket ticketsPromise={ticketsPromise}
        handleAddTask={handleAddTask}
        inProgressTasks={inProgressTasks}
        ></CustomerTicket>
      </Suspense>

      <Footer></Footer>
    </div>
  )
}

export default App
