import React, { useState, useEffect } from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';
import Axios from 'axios';
import {
    Label,
    Input,
    Form,
    FormGroup,
} from 'reactstrap';


const EditTask = () => {


    const { id } = useParams();
    console.log(id);

    const[taskList,setTaskList]=useState([]);
    let history= useHistory();
    useEffect(()=>{
        Axios.get("http://localhost:3001/read").then((response)=>{
            setTaskList(response.data[id-1]);
        });
    },[])
    
    console.log(taskList);
  



    return (
        <div className="container col-8">
            <div>
                <h1 className="heading my-3" >Edit Task</h1>
            </div>
            <hr />
            <div className="my-4">
                <Form>
                    <FormGroup >
                        <Label className="font-weight-bold">Task Name</Label>
                        <Input type="text" placeholder="Enter Task Name" value={taskList.taskName}></Input>
                        <Label className="font-weight-bold">Status</Label>
                        <Input type="text" placeholder="Enter Task Status" value={taskList.status}></Input>
                        <Label className="font-weight-bold">Due Date</Label>
                        <Input type="text" value={taskList.dueDate}  ></Input>
                        <Label className="font-weight-bold">Task Type</Label>
                        <Input type="text" placeholder="Enter Task Type" value={taskList.taskType}></Input>
                        <Label className="font-weight-bold">Description</Label>
                        <Input type="text" placeholder="Enter Task Description" value={taskList.description}></Input>
                    </FormGroup>
                    <button type="submit" className="btn btn-outline-dark font-weight-bold">Update</button>
                    <Link type="submit" to="/" className="btn btn-outline-danger ml-3  font-weight-bold">Cancel</Link>
                </Form>
            </div>
        </div>
    );
};

export default EditTask;