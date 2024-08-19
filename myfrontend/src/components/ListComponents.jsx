import React,{useState,useEffect} from "react";
import { deleteEmployee, listEmployee} from "../service/EmployeeService";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { getEmployee} from "../service/EmployeeService";


function ListItems(){
    // const dummydata=[
    //     {   "id":1,
    //         "firstName":"Demo",
    //         "lastName" : "Account",
    //         "email":"demo@gmail.com"
    //     },
    //     {   "id":2,
    //         "firstName":"Demo1",
    //         "lastName" : "Account",
    //         "email":"demo@gmail.com"
    //     },
    //     {   "id":3,
    //         "firstName":"Demo2",
    //         "lastName" : "Account",
    //         "email":"demo@gmail.com"
    //     }
    // ];
    const navigate = useNavigate();
    const[employee, setEmployee]= useState([]);
    useEffect(()=>{
        getAllEmployee();
    },[]);  

    function getAllEmployee(){
        listEmployee().then(function(response){
            setEmployee(response.data);
            // console.log(response.data);
        }).catch(error=>{
            console.error(error);
        })
    }

    function addemployee(){
        navigate('/add-employee');

    }
    function handleEdit(employeeId){
        // console.log(employeeId);
        // getEmployee(employeeId)
        // .then((Response)=>{
        //     // console.log(Response.data);
        //     navigate(`/edit-employees/${employeeId}`);
        // }).catch(error=>{
        //     console.error(error);
        // })
        navigate(`/edit-employees/${employeeId}`);
        
        
    }
    function handleDelete(id){
        deleteEmployee(id).then((response)=>{
            getAllEmployee();
        }).catch(error=>{
            console.log(error);
        })

    }

    return(
      <div className="container-fluid">
        <h1 className="text-center">Employee Details </h1>
        <button type="button" className="btn btn-success m-2" onClick={addemployee}>Add Employee</button>

        <table className="table  border">
            <thead>
                <tr className="text-center">
                    <td>ID</td>
                    <td>Fist Name</td>
                    <td>Last Name</td>
                    <td>Email Id</td>
                    <td>Action</td>
                </tr>
            </thead>
            <tbody>{
                    employee.map(employee=>
                    <tr key={employee.id}>
                        <td>{employee.id}</td>
                        <td>{employee.firstName}</td>
                        <td>{employee.lastName}</td>
                        <td>{employee.emailId}</td>
                        <td>
                            <button type="button" className="btn btn-primary m-2 " onClick={()=>handleEdit(employee.id)}>Edit</button>
                            <button type="button" className="btn btn-danger "onClick={()=>handleDelete(employee.id)}>Delete</button>
                        </td>
    
                    </tr>
                    )
                }
                
            </tbody>
            <tbody>
                
            </tbody>
            
        </table>
      </div> 
    );
}
export default ListItems;