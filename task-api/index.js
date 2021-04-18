const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const TaskModel = require("./models/AddTask");


app.use(cors());
app.use(express.json());


mongoose.connect("mongodb+srv://TaskListData:password18708@cluster0.4wgmz.mongodb.net/TaskList?retryWrites=true&w=majority",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>{
    console.log(`My database is now connected`);
});
 

app.post("/insert",async(req,res) =>{
    const taskName = req.body.taskName;
    const status = req.body.status;
    const dueDate = req.body.dueDate;
    const taskType = req.body.taskType;
    const description = req.body.description;

    const task = new TaskModel({taskName: taskName, status: status, dueDate: dueDate, 
        taskType: taskType, description: description });
try{ 
    console.log("Im here");
    await task.save();
}catch(err){
    console.log(err);25
}
});

app.get("/read",async(req,res)=>{
    TaskModel.find({}, (err,result) =>{
        if(err){
            res.send(err)
        }
        res.send(result)
    })
});

app.get("/read/:id",async(req,res)=>{
    TaskModel.find({_id: req.params.id}, (err,result) =>{
        if(err){
            res.send(err)
        }
        res.send(result)
    })
});


app.delete("/delete/:id", async(req,res)=>{
const id=req.params.id; 
await TaskModel.findByIdAndRemove(id).exec();
res.send("Deleted");
});

app.listen(3001, ()=>{
    console.log(`Server running on port 3001`);
})