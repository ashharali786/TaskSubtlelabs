import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import {
    Label,
    Input,
    Form,
    FormGroup,
} from 'reactstrap';


const AddTask = () => {
    const [taskName, setTaskName] = useState('');
    const [status, setStatus] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [taskType, setTaskType] = useState('');
    const [description, setDescription] = useState('');

   
    const addToList = async(e) => {
        await Axios.post("http://localhost:3001/insert", {
            taskName: taskName,
            status: status,
            dueDate: dueDate,
            taskType: taskType,
            description: description,
        });
        console.log(taskName + " " + status + " " + dueDate + " " + taskType + " " + description);
    };


    return (
        <div className="container col-8" >
            <div className="py-4">
                <h1>Add Task</h1>
                <hr />
                <div className="my-4">
                    <Form>
                        <FormGroup >
                            <Label className="font-weight-bold">Task Name</Label>
                            <Input type="text" onChange={(event) => { setTaskName(event.target.value); }} placeholder="Enter Task Name"></Input>
                            <Label className="font-weight-bold">Status</Label>
                            <Input type="text" onChange={(event) => { setStatus(event.target.value); }} placeholder="Enter Task Status"></Input>
                            <Label className="font-weight-bold">Due Date</Label>
                            <Input type="date" onChange={(event) => { setDueDate(event.target.value); }} ></Input>
                            <Label className="font-weight-bold">Task Type</Label>
                            <Input type="text" onChange={(event) => { setTaskType(event.target.value); }} placeholder="Enter Task Type"></Input>
                            <Label className="font-weight-bold">Description</Label>
                            <Input type="text" onChange={(event) => { setDescription(event.target.value); }} placeholder="Enter Task Description"></Input>
                        </FormGroup>
                        <button type="submit" onClick={addToList} className="btn btn-outline-dark font-weight-bold">Submit</button>
                        <Link type="submit" to="/" className="btn btn-outline-danger ml-3  font-weight-bold">Cancel</Link>
                    </Form>
                </div>

            </div>
        </div>

    );
};

export default AddTask;