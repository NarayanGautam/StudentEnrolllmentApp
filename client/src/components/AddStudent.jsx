import React from 'react'

const AddStudent = () => {
    return (
        <>           
            <form>
                <div className='space-y-2 flex flex-col m-10'>
                    <h1 className='text-3xl'>Add Student</h1>
                    <div className='flex flex-col'>
                        <label htmlFor='firstName'>First Name</label>
                        <input
                            id='firstName'
                            type='text'
                            className='border border-gray-300 px-3 py-2 w-fit'
                        />
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor='lastName'>Last Name</label>
                        <input
                            id='lastName'
                            type='text'
                            className='border border-gray-300 px-3 py-2 w-fit'
                        />
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor='email'>Email</label>
                        <input
                            id='email'
                            type='email'
                            className='border border-gray-300 px-3 py-2 w-fit'
                        />
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor='enrollmentDate'>Enrollment Date</label>
                        <input
                            id='enrollmentDate'
                            type='date'
                            className='border border-gray-300 px-3 py-2 w-fit'
                        />
                    </div>
                    <div>
                        <button className='bg-blue-500 text-white px-3 py-2 w-fit'>
                        Add Student
                    </button>
                    </div>
                </div>
            </form>




            
            


            
        </>


    )
}

export default AddStudent