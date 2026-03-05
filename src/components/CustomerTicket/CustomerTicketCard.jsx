import React from 'react';
import { FaCalendar, FaCircle } from 'react-icons/fa6';
import { FiCalendar } from 'react-icons/fi';

const CustomerTicketCard = () => {
  return (
    <div className='md:w-[80%] mx-auto'>
      <h1 className='text-[#34485A] font-semibold text-2xl'>Customer Tickets</h1>

      <div className="py-10 grid gap-6 lg:grid-cols-2">

    {/* ticket card */}
        <div className="bg-gray-100 rounded-lg shadow p-5">
          <div className="flex justify-between items-start">
            <h3 className="text-lg font-medium text-[#001931]">
              Login Issues - Can't Access Account
            </h3>
            <span className="bg-[#B9F8CF] text-base text-[#0B5E06] px-3 py-1 rounded-full font-medium flex items-center gap-2">
              <FaCircle color='#02A53B'></FaCircle>
              Open
            </span>
          </div>

          <p className="text-[#627382] text-base mt-2">
            Customer is unable to log in to their account. They've tried resetting
            their password multiple times but still...
          </p>

          <div className="flex justify-between items-center mt-4 text-sm">
            <div className="flex gap-3">
              <span className="text-[#627382] text-sm">#1001</span>
              <span className="text-[#F83044] font-medium">HIGH PRIORITY</span>
            </div>

            <div className="flex items-center gap-3 text-sm text-[#627382]">
              <span>John Smith</span>
              <span className='flex gap-2 justify-between items-center'><FiCalendar width={24} height={24} /> 1/15/2024</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerTicketCard;