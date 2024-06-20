import React, { Suspense } from 'react'
import 'tailwindcss/tailwind.css';
import { useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Bee } from '../models/bee';
import Loader from './Loader';
import emailjs from "@emailjs/browser";

const ContactInfo = () => {

    const [form, setForm] = useState({ name: '', email: '', message: '' })
    const [loading, setLoading] = useState(false);
    const formRef = useRef(null);
    const [currentAnimation, setCurrentAnimation] = useState("idle");

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleFocus = (e) => {
        setCurrentAnimation("hover");
    }
    const handleBlur = (e) => {
        setCurrentAnimation("idle");
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setCurrentAnimation("hover");
        emailjs.sendForm(
            import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
            formRef.current,
            import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
        ).then(() => {
            setLoading(false);
            // showAlert({ text: 'Message sent successfully', type: 'success' });
            alert('Message sent successfully');
            setTimeout(() => {
                setForm({ name: '', email: '', message: '' });
                if (formRef.current) formRef.current.reset();
            }, 3000);
        }).catch((e) => {
            setLoading(false);
            setCurrentAnimation("idle");
            alert('An error occurred, please try again');
        })
    }
    return (
        <div className='max-w-[80%] min-w-[40%]'>
            <div className="max-h-[50%] p-8 bg-white bg-opacity-30 backdrop-filter 
            backdrop-blur-lg border border-gray-200 rounded-lg shadow-lg transform transition duration-700 ease-in-out animate-fadeIn">
                <div className='flex-1 flex flex-col min-w-[30%]'>
                    <h2 className="text-3xl font-bold mb-4 text-green-700">Get In Touch</h2>
                    <form
                        className='flex flex-col gap-7 mt-4'
                        ref={formRef}
                        onSubmit={handleSubmit}
                    >
                        <label className='text-black font-semibold'>Name
                            <input
                                type='text'
                                name='name'
                                className='input'
                                placeholder='Enter your name'
                                required
                                onChange={handleChange}
                                value={form.name}
                                onFocus={handleFocus}
                                onBlur={handleBlur}
                            />
                        </label>
                        <label className='text-black font-semibold'>Email
                            <input
                                type='email'
                                name='email'
                                className='input'
                                placeholder='Your email please'
                                required
                                onChange={handleChange}
                                value={form.email}
                                onFocus={handleFocus}
                                onBlur={handleBlur}
                            />
                        </label>
                        <label className='text-black font-semibold'>Message
                            <input
                                name='message'
                                className='input'
                                placeholder='Enter your message'
                                required
                                onChange={handleChange}
                                value={form.message}
                                onFocus={handleFocus}
                                onBlur={handleBlur}
                            />
                        </label>
                        <button
                            type='submit'
                            // Making wider to match the button in the form
                            className='btn w-full'
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                            disabled={loading}
                        >{loading ? 'Sending...' : 'Send'}</button>
                    </form>
                </div>
                {/* <div className='lgw:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]'>
                    <Canvas
                        camera={{
                            position: [0, 0, 5],
                            fov: 60,
                            near: 0.1,
                            far: 1000
                        }}
                    >
                        <Suspense fallback={<Loader />}>
                            <Bee
                                position={[0, -0.5, 1]}
                                rotation={[0, -0.7, 0]}
                                scale={[1.5, 1.5, 1.5]}
                                currentAnimation={currentAnimation}
                            />
                            <ambientLight intensity={0.3} />
                            <hemisphereLight intensity={3} />
                        </Suspense>
                    </Canvas>
                </div> */}
            </div>
        </div>
    )
}

export default ContactInfo