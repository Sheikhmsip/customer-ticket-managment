import React from 'react';
import { FaCalendar, FaCircle } from 'react-icons/fa6';
import { FiCalendar } from 'react-icons/fi';

const CustomerTicketCard = ({ tickets, handleAddTask }) => {
  return (
    <div className='md:w-[75%] mx-auto'>
      <h1 className='text-[#34485A] font-semibold text-2xl'>Customer Tickets</h1>

      <div className="py-5 grid gap-6 lg:grid-cols-2">

        {/* ticket card */}

        {tickets.map(ticket => <div key={ticket.id} onClick={() => {
          handleAddTask(ticket)
        }} className="bg-gray-100 rounded-lg shadow p-5 cursor-pointer">
          <div className="flex justify-between items-start">
            <h3 className="text-lg font-medium text-[#001931]">
              {ticket.title}
            </h3>
            <span className={`text-base  px-3 py-1 rounded-full font-medium flex items-center gap-2 ${ticket.status === "Open" ? "bg-[#B9F8CF] text-[#0B5E06]" : ticket.status === "In Progress" ? "bg-[#F8F3B9] text-[#9C7700]" : "bg-blue-300 text-[#FFFFFF]"}`}>
              <FaCircle color={`${ticket.status === "Open"
                ? "#02A53B"
                : ticket.status === "In Progress"
                  ? "#FEBB0C"
                  : "#FFFFFF"}`}></FaCircle>
              {ticket.status}
            </span>
          </div>

          <p className="text-[#627382] text-base mt-2">
            {ticket.description}
          </p>

          <div className="flex justify-between items-center mt-4 text-sm">
            <div className="flex gap-3">
              <span className="text-[#627382] text-sm">{ticket.id}</span>
              <span className={`font-medium uppercase ${ticket.priority === "High" ? "text-[#F83044]" : ticket.priority === "Medium" ? "text-[#FEBB0C]" : "text-[#02A53B]"}`}>
                {ticket.priority} priority
              </span>
            </div>

            <div className="flex items-center gap-3 text-sm text-[#627382]">
              <span>{ticket.customer}</span>
              <span className='flex gap-2 justify-between items-center'><FiCalendar width={24} height={24} />{ticket.date} </span>
            </div>
          </div>
        </div>)}
      </div>
    </div>
  );
};

export default CustomerTicketCard;