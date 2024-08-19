import { FOCUSABLE_SELECTOR } from "@testing-library/user-event/dist/utils";
import React, { useState, useEffect } from "react";
import { addEmployee, updateEmployee } from "../service/EmployeeService";
import { useNavigate, useParams } from "react-router-dom";
import { getEmployee } from "../service/EmployeeService";


export default function AddEmployee() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [emailId, setEmailId] = useState('');
    const navigate = useNavigate();

    const { id } = useParams();
    //Handling error of fields
    const [formError, setFormError] = useState({
        firstName: '',
        lastName: '',
        emailId: ''
    })
    function saveOrUpdateEmployee(event) {
        event.preventDefault();
        const Employee = { emailId, firstName, lastName };
        if (validateForm()) {
            if(id){
                updateEmployee(id,Employee);
                navigate('/employees');
            }
            else{
                addEmployee(Employee)
                .then((Response) => {
                    navigate('/employees');
                    //    console.log(Response);
                    //    console.log(validateForm());

                })
                .catch(error => {
                    console.error(error);
                })
            }
        }



    }
    function validateForm() {
        const errorCopy = { ...formError };

        let flag = true;
        if (firstName.trim()) {
            errorCopy.firstName = '';
        }
        else {
            errorCopy.firstName = "First name Required !";
            flag = false;
        }
        if (lastName.trim()) {
            errorCopy.lastName = '';
        }
        else {
            errorCopy.lastName = "Last name Required !";
            flag = false;
        }
        if (emailId.trim()) {
            errorCopy.emailId = '';
        }
        else {
            errorCopy.emailId = "Email Required !";
            flag = false;
        }
        setFormError(errorCopy);
        // console.log(errorCopy);
        return flag;

    }

    function handleFirstName(event) {
        setFirstName(event.target.value);
        // console.log(firstName);

    }
    function handleLastName(event) {
        setLastName(event.target.value);
    }
    function handleEmail(event) {
        setEmailId(event.target.value);
    }
    //page title using useParam hook
    function pageTitle() {

        if (id) {
            return (<h3 className="text-center">Update Employee Details</h3>);

        }
        else {
            return (<h3 className="text-center">Add Employee Details</h3>);

        }
    }


    //populate the data in update employee details
    useEffect(() => {
        if (id) {
            getEmployee(id)
                .then((Response) => {
                    // console.log(Response.data);
                    setEmailId(Response.data.emailId);
                    setFirstName(Response.data.firstName);
                    setLastName(Response.data.lastName);
                    
                }).catch(error => {
                    console.error(error);
                })
        }
    }, [id])
    return (
        <div className="card container" style={{ width: '35rem' }}>
            <div className="card-body">
                <form className="container">
                    {pageTitle()}

                    <div className="form-group m-3">
                        <label htmlFor="exampleInputEmail1">First Name</label>
                        <input type="text" className="form-control" aria-describedby="emailHelp" placeholder="Enter First name" name="firstName" value={firstName} onChange={handleFirstName} />
                        <div className="text-danger">{formError.firstName}</div>
                    </div>
                    <div className="form-group m-3">
                        <label htmlFor="exampleInputEmail1">Last Name</label>
                        <input type="text" className="form-control" aria-describedby="emailHelp" placeholder="Enter Last name" name="lastName" value={lastName} onChange={handleLastName} />
                        <div className="text-danger">{formError.lastName}</div>
                    </div>
                    <div className="form-group m-3">
                        <label htmlFor="exampleInputPassword1">Email</label>
                        <input type="email" className="form-control" placeholder="Enter Email Address" name="email" value={emailId} onChange={handleEmail} />
                        <div className="text-danger">{formError.emailId}</div>
                    </div>
                    <div className="text-center">
                        <button type="submit" className="btn btn-primary mt-3" onClick={saveOrUpdateEmployee}>Submit</button>
                    </div>
                </form>

            </div>
        </div>
    );
}