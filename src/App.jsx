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
  const [loading, setLoading] = useState(true);
  const [tickets, setTickets] = useState([]);
  // const ticketsPromise = fatchTickets();
  const [inProgressTasks, setInProgressTasks] = useState([]);
  const [resolvedTasks, setResolvedTasks] = useState([]);

  useEffect(() => {
    fatchTickets()
      .then(data => {
        setTickets(data);
        setLoading(false);
      });
  }, []);

  const handleAddTask = (ticket) => {
    const existsInProgress = inProgressTasks.find(t => t.id === ticket.id) ;
    const existsResolved = resolvedTasks.find(t => t.id === ticket.id);
    if (!existsInProgress && !existsResolved) {
      setInProgressTasks([...inProgressTasks, ticket]);
      const updatedTickets = tickets.map(t =>
        t.id === ticket.id ? { ...t, status: "In Progress" } : t
      );
      setTickets(updatedTickets);

      toast.success("Ticket added to In-Progress");
    } else {
      if(existsResolved){
        toast.warning("Ticket already added to Resolved");
      }else{
        toast.warning("Ticket already added to In-Progress");
      }
      
    }
  };

  const handleCompleteTask = (ticket) => {
    const exists = resolvedTasks.find(t => t.id === ticket.id);
    setInProgressTasks(inProgressTasks.filter(t => t.id !== ticket.id));
    if (!exists) {
      setResolvedTasks([...resolvedTasks, ticket]);
      const updatedTickets = tickets.map(t =>
        t.id === ticket.id ? { ...t, status: "Resolved" } : t
      );
      setTickets(updatedTickets);
    } else{
      toast.warning("Ticket already added to Resolved");
    }

    toast.success("Ticket successfully Resolved");
  };


  return (
    <div className='bg-white w-full'>
      <Navbar></Navbar>
      <CountTask
        inProgressTasks={inProgressTasks}
        resolvedTasks={resolvedTasks}
      ></CountTask>
      {loading ? (
        <div className="flex items-center justify-center h-64">
          <div className="w-20 bg-red-500 loading loading-infinity loading-xl"></div>
        </div>
      ) : (
        <CustomerTicket
          tickets={tickets}
          handleAddTask={handleAddTask}
          inProgressTasks={inProgressTasks}
          handleCompleteTask={handleCompleteTask}
          resolvedTasks={resolvedTasks}
        />
      )}

      <Footer></Footer>
      <ToastContainer position="top-center" autoClose={2000} />
    </div>

  )
}

export default App
