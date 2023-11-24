import React, { useState } from 'react'

const UpdateStudent = () => {

  const [student_id, setStudentId] = useState('')
  const [email, setEmail] = useState('')

  const updateStudent = async (e) => {
    e.preventDefault()
    try {
      const body = { student_id, email }
      const response = await fetch(`http://localhost:3000/students/${student_id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })
      console.log(response);
      setStudentId('')
      setEmail('')
    } catch (error) {
      console.error(error.message)
    }
  }


  return (
    <>
      <div className="container mx-auto ">
        <h1 className="text-center font-medium text-2xl"> 
          Update Student
        </h1>        
        <p className="text-center">
          You can update a students email address here:
        </p>
        <form className="flex flex-col mx-auto my-8 w-1/3" onSubmit={updateStudent}>
          <label htmlFor="student_id">Student ID:</label>
          <input 
            type="text"
            name="student_id"
            id="student_id" 
            className="border border-gray-400 px-4 py-2 my-2" 
            value={student_id} 
            autoComplete='on'
            onChange={(e) => setStudentId(e.target.value)}         
          />
          <label htmlFor="email">Email:</label>
          <input 
            type="text" 
            name="email" 
            id="email" 
            className="border border-gray-400 px-4 py-2 my-2" 
            value={email} 
            autoComplete='on'
            onChange={(e) => setEmail(e.target.value)}
          />
          <button className='bg-blue-500 text-white px-3 py-2 w-fit hover:bg-blue-700'>
            Update Student
          </button>
        </form>
      </div>      
    </>
  )
}

export default UpdateStudent;