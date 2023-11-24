import React, { useState } from 'react';

const AddStudent = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [enrollmentDate, setEnrollmentDate] = useState('');

    const addStudent = async (e) => {
        e.preventDefault();
        try {
            const body = { firstName, lastName, email, enrollmentDate };
            const response = await fetch('http://localhost:3000/students', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body),
            });
            console.log(response);
        } catch (error) {
            console.error(error.message);
        }
    };


    return (
        <>

            <div className="container mx-auto ">
                <h1 className="text-center font-medium text-2xl">
                    Add Student
                </h1>
                <p className="text-center">
                    You can add a student here:
                </p>
                <form onSubmit={addStudent} className="flex flex-col mx-auto my-8 w-1/3">
                    <label htmlFor="firstName">First Name:</label>
                    <input
                        type="text"
                        name="firstName"
                        id="firstName"
                        className="border border-gray-400 px-4 py-2 my-2"
                        value={firstName}
                        autoComplete="on"
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                    <label htmlFor="lastName">Last Name:</label>
                    <input
                        type="text"
                        name="lastName"
                        id="lastName"
                        className="border border-gray-400 px-4 py-2 my-2"
                        value={lastName}
                        autoComplete="on"
                        onChange={(e) => setLastName(e.target.value)}
                    />
                    <label htmlFor="email">Email:</label>
                    <input
                        type="text"
                        name="email"
                        id="email"
                        className="border border-gray-400 px-4 py-2 my-2"
                        value={email}
                        autoComplete="on"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <label htmlFor="enrollmentDate">Enrollment Date:</label>
                    <input
                        type="text"
                        name="enrollmentDate"
                        id="enrollmentDate"
                        className="border border-gray-400 px-4 py-2 my-2"
                        value={enrollmentDate}
                        autoComplete="on"
                        onChange={(e) => setEnrollmentDate(e.target.value)}
                    />
                    <button className='bg-blue-500 text-white px-3 py-2 w-fit'>
                        Add Student
                    </button>
                </form>
            </div>
        </>          
    );
};

export default AddStudent;

