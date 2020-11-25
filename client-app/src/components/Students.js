import React, { useState } from "react"
import { useQuery, gql, useMutation } from "@apollo/client"
import "./Students.css"

// GraphQl scripts

// Get Students Data
const GET_STUDENTS = gql`
  query {
    students {
      id
      name
      age
      email
    }
  }
`

// Add Student
const ADD_STUDENT = gql`
  mutation AddStudent($email: String!, $age: Int!, $name: String!) {
    addStudent(input: {  email: $email, age: $age, name: $name }) {
      id
      name
    }
  }
`

//

const Students = () => {

    // Make Request
    const { loading, error, data } = useQuery(GET_STUDENTS)
    const [addStd] = useMutation(ADD_STUDENT)

    // States for Data
    let [age, setAge] = useState(0)
    let [name, setName] = useState("")
    let [email, setEmail] = useState("")


    // Handle Submit
    const handleSubmit = (event) => {
        event.preventDefault()
        // Add Data to database
        addStd({
            variables: {
                email: email, age: age, name: name
            }
        })

        // Refresh the browser
        window.location.reload()
    }

    // If Loading
    if (loading) {
        return <h2>Loading</h2>
    }

    // If Error
    if (error) {
        return <h2>Error </h2>
    }

    // If Working fine
    const { students } = data

    return (
        <div className="students-container">


            <form action="" onSubmit={(event) => handleSubmit(event)} className="add-student-form">
                <caption>Add Student</caption>
                <input type="text" value={name} onChange={(event) => { setName(event.target.value) }} required />
                <input type="email" value={email} onChange={(event) => { setEmail(event.target.value) }} required />
                <input type="number" value={age} onChange={(event) => { setAge(parseInt(event.target.value)) }} required />
                <input className='button' type='submit' value="Add Student" />
            </form>

            <div className='students-data'>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students.map((student) => {
                            return (
                                <tr key={student.id}>
                                    <td>{student.id}</td>
                                    <td>{student.name}</td>
                                    <td>{student.age}</td>
                                    <td>{student.email}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default Students
