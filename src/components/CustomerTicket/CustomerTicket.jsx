import CustomerTicketCard from './CustomerTicketCard';
import TaskStatus from './TaskStatus';

const CustomerTicket = () => {
    
    return (
        <div className='md:w-10/12 mx-auto mt-5 gap-5 px-2 flex flex-col-reverse md:flex items-start justify-start lg:flex-row '>
            <CustomerTicketCard></CustomerTicketCard>
            <TaskStatus></TaskStatus>
        </div>
    );
};

export default CustomerTicket;