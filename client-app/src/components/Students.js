import React from "react"
import { useQuery, gql } from '@apollo/client'
import './Students.css'

// GraphQl script for getting all students data 
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



const Students = () => {
    // Make Request
    const { loading, error, data } = useQuery(GET_STUDENTS)

    // If Loading
    if (loading) {
        return <h2>Loading</h2>
    }

    // If Error
    if (error) {
        return <h2>Error    </h2>
    }

    // If Working fine
    const { students } = data


    return (
        <div className="students-container">
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        students.map((student) => {
                            return (
                                <tr key={student.id}>
                                    <td>{student.name}</td>
                                    <td>{student.age}</td>
                                    <td>{student.email}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Students