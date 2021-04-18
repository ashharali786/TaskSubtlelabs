import React from 'react';
import TaskList from './TaskList';

const Home = () => {
    return(
        <div className="container col-8">
            <div>
                <h1 className="heading my-3" >Home</h1>
                <br/>                
                <h3>Task List</h3>
                <TaskList></TaskList>
            </div>
        </div>
    );
};

export default Home;