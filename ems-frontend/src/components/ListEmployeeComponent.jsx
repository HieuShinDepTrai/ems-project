import React, { useEffect, useState } from 'react'
import { listEmployees, deleteEmployee } from '../services/EmployeeService';
import { useNavigate } from 'react-router-dom';

const ListEmployeeComponent = () => {

    const [employees, setEmployees] = useState([])
    const [departments, setDepartments] = useState([]);
    const [departmentName, setDepartmentName] = useState('')

    const navigator = useNavigate();

    useEffect(() => {
        getAllEmployees();
    }, []);

    function getAllEmployees() {
        listEmployees().then((response) => {
            setEmployees(response.data)
        }).catch(error => {
            console.error(error)
        })
    }

    function addNewEmployee() {
        navigator('/add-employee');
    }

    function updateEmployee(id) {
        navigator(`/edit-employee/${id}`);
    }

    function removeEmployee(id) {
        console.log(id);

        deleteEmployee(id).then((response) => {
            getAllEmployees();
        }).catch(error => {
            console.error(error);
        })
    }

    return (
        <div className='container'>
            <h2>List of Employees</h2>
            <button className='btn btn-primary' onClick={addNewEmployee}>Add Employee</button>
            <table className="table table-striped table-bordered" style={{marginTop: '10px'}}>
                <thead>
                    <tr>
                        <th className='text-center' scope="col" >ID</th>
                        <th className='text-center' scope="col">First Name</th>
                        <th className='text-center' scope="col">Last Name</th>
                        <th className='text-center' scope="col">Email</th>
                        <th className='text-center' scope="col">Department</th>
                        <th className='text-center' scope='col'>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map(employee =>
                        <tr key={employee.id}>
                            <th className='text-center' scope="row">{employee.id}</th>
                            <td className='text-center'>{employee.firstName}</td>
                            <td className='text-center'>{employee.lastName}</td>
                            <td className='text-center'>{employee.email}</td>
                            <td className='text-center'>{employee.departmentId}</td>
                            <td className='text-center'>
                                <button className='btn btn-info' onClick={() => updateEmployee(employee.id)}>Update</button>
                                <button className='btn btn-danger' onClick={() => removeEmployee(employee.id)} style={{marginLeft:'10px'}}>Delete</button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default ListEmployeeComponent