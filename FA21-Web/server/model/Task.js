const mongoose = require("mongoose");
const TaskSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        iscomplete: {
            type: Boolean,
            default: false
        },
        created: {
            type: Date,
            default: Date.now
        },
        duedate: {
            type: Date,
            required: true
        },
        user: {
            type: mongoose.Types.ObjectId,
            required: true
        }
    }
)
const Task = mongoose.model("task", TaskSchema);
module.exports = Task;