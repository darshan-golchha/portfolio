import React from 'react'

const Social = () => {
    return (
        <section className='flex gap-7'>
            <a href='https://www.linkedin.com/in/darshan-golchha/' target='_blank' rel='noreferrer'>
                <img src='/assets/icons/linkedin.svg' alt='LinkedIn' className='w-8 h-8' />
            </a>
            {/* Github */}
            <a href='https://github.com/darshan-golchha' target='_blank' rel='noreferrer'>
                <img src='/assets/icons/github.svg' alt='GitHub' className='w-8 h-8' />
            </a>
            {/* Email */}
            <a href='mailto:dgolchha@wisc.edu' target='_blank' rel='noreferrer'>
                <img src='/assets/icons/mail.svg' alt='Email' className='w-8 h-8' />
            </a>
        </section>
    )
}

export default Social