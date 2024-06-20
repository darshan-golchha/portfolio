import React from 'react'

const Alert = ({ type, text }) => {
    return (
        <div className='absolute top-10 left-0 right-0 flex justify-center items-center'>
            <div className={`${type === 'danger' ? 'bg-red-500' : 'bg-blue-800'} px-4 py-2
        text-indigo-100 leading-none lg:rounded-full flex flex-col  items-center justify-center lg:inline-flex`} role='alert'>
                <p className={`${type === 'danger' ? 'bg-red-500' : 'bg-blue-800'} flex rounded-full uppercase
            font-semibold`}>{type === "danger" ? 'Failed' : "Success"}</p>
                <p className='mr-2 text-center'>{text}</p>
            </div>
        </div>
    )
}

export default Alert