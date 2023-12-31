import React, { useState } from 'react'

// DeleteStudent component gets a student id and deletes that student record from the database
const DeleteStudent = () => {
  // useState hook to set the state of the student id
  const [id, setStudentId] = useState('');

  // deleteStudent function that attempts to delete a student record given the id
  const deleteStudent = async (e) => {
    e.preventDefault();
    try {
      const body = { id };
      const response = await fetch(`http://localhost:3000/students/${id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      console.log(response);
      // reset the form
      setStudentId('');
    } catch (error) {
      console.error(error.message);
    }
  };

  // return the DeleteStudent component
  // a form that gets the student id
  return (
    <>
      <div className="container mx-auto ">
        <h1 className="text-center font-medium text-2xl">
          Delete Student
        </h1>
        <p className="text-center">
          You can delete a student here:
        </p>
        <form onSubmit={deleteStudent} className="flex flex-col mx-auto my-8 w-1/3">
          <label htmlFor="student_id">Student ID:</label>
          <input
            type="text"
            name="student_id"
            id="student_id"
            className="border border-gray-400 px-4 py-2 my-2"
            value={id}
            autoComplete="on"
            onChange={(e) => setStudentId(e.target.value)}
          />
          <button className="bg-blue-500 text-white px-3 py-2 w-fit hover:bg-blue-700">
            Delete Student
          </button>
        </form>
      </div>
    </>
  )
}

export default DeleteStudent;