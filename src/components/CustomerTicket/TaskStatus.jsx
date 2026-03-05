import React from 'react';

const TaskStatus = ({ inProgressTasks }) => {
    console.log(inProgressTasks);
    return (
        <div className='md:w-[20%] '>
            {/* Task Status */}
            <div>
                <h1 className='text-[#34485A] font-semibold text-2xl'>Task Status</h1>
            
            {inProgressTasks.length === 0 ? (
      <p className='text-[#627382] text-base mt-2'>Select a ticket to add to Task Status</p>
    ) : (
      inProgressTasks.map(task => (
        <div key={task.id} className='p-2 rounded mt-2 space-y-1'>
          <p className='text-lg text-[#001931] font-medium mb-2'>{task.title}</p>

          <button
            className=' w-full bg-[#02A53B] text-white text-base font-semibold px-4 py-3 rounded'
          >
            Complete
          </button>

        </div>
      ))
    )}
            </div>

            {/* Resolved tasks */}
            <div className='mt-4'>
                <h2 className='text-[#34485A] font-semibold text-2xl mt-2'>Resolved</h2>
                <p className='text-[#627382] text-base mt-2'>No resolved tasks yet.</p>
            </div>

        </div>
    );
};

export default TaskStatus;