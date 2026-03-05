import React from 'react';

const TaskStatus = () => {
    return (
        <div className='md:w-[20%] '>
            {/* Task Status */}
            <div>
                <h1 className='text-[#34485A] font-semibold text-2xl'>Task Status</h1>
            <p className='text-[#627382]'>Select a ticket to add to Task Status</p>
            </div>

            {/* Resolved tasks */}
            <div className='mt-4'>
                <h2 className='text-lg font-medium text-[#001931]'>Resolved</h2>
                <p className='text-[#627382]'>No resolved tasks yet.</p>
            </div>

        </div>
    );
};

export default TaskStatus;