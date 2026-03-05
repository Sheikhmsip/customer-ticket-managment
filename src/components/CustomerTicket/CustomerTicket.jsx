import React, { use } from 'react';
import CustomerTicketCard from './CustomerTicketCard';
import TaskStatus from './TaskStatus';

const CustomerTicket = ({ ticketsPromise, handleAddTask, inProgressTasks, handleCompleteTask, resolvedTasks }) => {
    const ticketsData = use(ticketsPromise);
    console.log(ticketsData);
    return (
        <div className='md:w-10/12 mx-auto mt-5 gap-5 px-2 flex flex-col-reverse md:flex items-start justify-start lg:flex-row '>
            <CustomerTicketCard tickets={ticketsData} handleAddTask={handleAddTask}></CustomerTicketCard>
            <TaskStatus 
            inProgressTasks={inProgressTasks} 
            handleCompleteTask={handleCompleteTask}
            resolvedTasks={resolvedTasks}
            ></TaskStatus>
        </div>
    );
};

export default CustomerTicket;