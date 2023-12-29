import React, { useEffect, useState } from 'react'
import { listEmployees } from '../services/EmployeeService';
import { useNavigate } from 'react-router-dom';

const ListEmployeeComponent = () => {

    const [employees, setEmployees] = useState([])

    const navigator = useNavigate();

    useEffect(() => {
        listEmployees().then((response) => {
            setEmployees(response.data)
        }).catch(error => {
            console.error(error)
        })
    }, []);

    function addNewEmployee() {
        navigator('/add-employee');
    }

  return (
    <div className='container'>
        <h2>List of Employees</h2>
        <button className='btn btn-primary' onClick={addNewEmployee}>Add Employee</button>
        <table className="table table-striped table-bordered">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">Email</th>
                </tr>
            </thead>
            <tbody>
                {employees.map(employee => 
                    <tr key={employee.id}>
                        <th scope="row">{employee.id}</th>
                        <td>{employee.firstName}</td>
                        <td>{employee.lastName}</td>
                        <td>{employee.email}</td>
                    </tr>
                )}
            </tbody>
        </table>
    </div>
  )
}

export default ListEmployeeComponent