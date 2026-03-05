import './App.css'
import CountTask from './components/CountTask/CountTask'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Fotter'
import CustomerTicket from './components/CustomerTicket/CustomerTicket'
import { Suspense, useEffect, useState } from 'react'
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const fatchTickets = async () => {
    const response = await fetch('/tickets.json');
    const data = await response.json();
    return data;
};

function App() {
const [tickets, setTickets] = useState([]);

  // const ticketsPromise = fatchTickets();
  const [inProgressTasks, setInProgressTasks] = useState([]);
  const [resolvedTasks, setResolvedTasks] = useState([]);

useEffect(() => {
  fatchTickets().then(data => setTickets(data));
}, []);
    const handleAddTask = (ticket) => {
    const exists = inProgressTasks.find(t => t.id === ticket.id);
  if (!exists) {
    setInProgressTasks([...inProgressTasks, ticket]);
     const updatedTickets = tickets.map(t =>
      t.id === ticket.id ? { ...t, status: "In Progress" } : t
    );
    setTickets(updatedTickets);

    toast.success("Ticket added to In-Progress");
  }else {
    toast.warning("Ticket already added to In-Progress");
  }
  };

   const handleCompleteTask = (ticket) => {
    setInProgressTasks(inProgressTasks.filter(t => t.id !== ticket.id));
    setResolvedTasks([...resolvedTasks, ticket]);
    toast.success("Ticket successfully Resolved");
  };

 
  return (
    <div className='bg-white w-full'>
      <Navbar></Navbar>
      <CountTask 
      inProgressTasks={inProgressTasks}
      resolvedTasks={resolvedTasks}
      ></CountTask>
      <Suspense fallback={<div className="flex items-center justify-center h-64">
      <div className="w-20 bg-red-500 loading loading-infinity loading-xl"></div>
    </div>}>

        <CustomerTicket 
        tickets={tickets}
        
        handleAddTask={handleAddTask}
        inProgressTasks={inProgressTasks}
        handleCompleteTask={handleCompleteTask}
        resolvedTasks={resolvedTasks}
        ></CustomerTicket>
      </Suspense>

      <Footer></Footer>
      <ToastContainer position="top-center" autoClose={2000} />
    </div>
    
  )
}

export default App
