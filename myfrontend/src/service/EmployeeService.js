import axios from "axios";
const spring_api ='http://localhost:8080/api/v1/employees'
export const listEmployee=()=>{
        // axios.get(spring_api).then(function (response){
        //          console.log(response.data);
        // });
        return axios.get(spring_api);

        
}

export const addEmployee=(employee)=>{
        return axios.post(spring_api, employee);
}

export const getEmployee=(employeeId)=>{
        return axios.get(spring_api+'/'+employeeId);
}

export const updateEmployee=(employeeId, employee)=>{
        return axios.put(spring_api+'/'+employeeId, employee);
}

export const deleteEmployee=(employeeId)=>{
        return axios.delete(spring_api+'/'+employeeId);
}
