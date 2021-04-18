const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    taskName:{
        type: String,
        required: true,
    },
    status:{
        type: String,
        required: true,
    },
    dueDate:{
        type: String,
        required: true,
    },
    taskType:{
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true,
    },

});

const appData = mongoose.model("MyTaskData",TaskSchema)
module.exports = appData