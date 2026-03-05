import React from 'react';
import vactor from '../../assets/vector1.png'
const CountTask = ({ inProgressTasks }) => {
    return (
        <div className='md:w-10/12 mx-auto flex justify-between items-center mt-5 gap-5 text-center px-2'>
            <div className='relative w-1/2 overflow-hidden rounded-lg bg-gradient-to-r from-[#632EE3] to-[#9F62F2] md:py-28 py-20 text-white'>
                <img
                    src={vactor}
                    className='absolute top-0 left-0 w-1/2 h-full opacity-80  pointer-events-none'
                />
                <img
                    src={vactor}
                    className='absolute top-0 right-0 w-1/2 h-full transform -scale-x-100 opacity-80 pl pointer-events-none'
                />
                <div className='relative z-10'>
                    <h3 className='text-2xl'>In-Progress</h3>
                    <p className='text-6xl font-semibold'>{inProgressTasks.length}</p>
                </div>

            </div>
            <div className='relative w-1/2 overflow-hidden rounded-lg bg-gradient-to-r from-[#54CF68] to-[#00827A] md:py-28 py-20 text-white'>
                <img
                    src={vactor}
                    className='absolute top-0 left-0 w-1/2 h-full opacity-80  pointer-events-none'
                />
                <img
                    src={vactor}
                    className='absolute top-0 right-0 w-1/2 h-full transform -scale-x-100 opacity-80 pl pointer-events-none'
                />
                <div className='relative z-10'>
                    <h3 className='text-2xl'>Resolved</h3>
                    <p className='text-6xl font-semibold'>0</p>
                </div>

            </div>

        </div>
    );
};

export default CountTask;