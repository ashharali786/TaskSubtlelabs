import { useEffect, useState } from "react";
import { Link, useHistory } from 'react-router-dom';
import Axios from 'axios';
import React from 'react';

const TaskList = () => {

    const[taskList,setTaskList]=useState([]);
    let history= useHistory();
    useEffect(()=>{
        Axios.get("http://localhost:3001/read").then((response)=>{
            setTaskList(response.data);
        });
    },[])

    const deleteTask = (id)=>{
        Axios.delete(`http://localhost:3001/delete/${id}`);
        window.location.reload();
    };
      
    return (
        <div className="container">
            <table class="table table-hover my-4">
                <thead >
                    <tr className="underLine">
                        <th scope="col">#</th>
                        <th scope="col">TASK NAME</th>
                        <th scope="col">STATUS</th>
                        <th scope="col">DUE DATE</th>
                        <th scope="col">TASK TYPE</th>
                        <th scope="col">DESCRIPTION</th>
                        <th scope="col">ACTIONS</th>
                    </tr>
                </thead>
                <tbody >
                    {taskList.map((val,index)=>(
                    <tr className="underLine">
                        <th scope="row">{index+1}</th>
                        <td>{val.taskName}</td>
                        <td>{val.status}</td>
                        <td>{val.dueDate}</td>
                        <td>{val.taskType}</td>
                        <td>{val.description}</td>
                        <td>
                        <button onClick={()=> history.push(`/EditTask/${index+1}`)} className="btn btn-outline-primary btn-sm">Edit</button>
                        <button onClick={()=> deleteTask(val._id)} className="btn btn-outline-danger btn-sm ml-3">Delete</button>
                        </td>
                    </tr>

                    ))}
                    
                    
                </tbody>
            </table>
        </div>
    );
};

export default TaskList;