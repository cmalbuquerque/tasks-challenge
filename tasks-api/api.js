const express = require("express"),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    app = express(),
    port = process.env.PORT || 8080,
    newTaskPeriod = process.env.NEW_TASK_PERIOD || 60000;

app.use(cors({origin: '*'}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

class Task {
    constructor({id, text, completed = false}){
        this.id = id;
        this.text = text;
        this.completed = completed;
    }
}

const storage = new Map([[0, new Task({id: 0, text: "Task", completed: false})]]);

/**
 * API get() Method
 * Invoke it by accessing: http://localhost:PORT/api/tasks/
 */
app.get("/api/tasks/", (_, res) => res.json(Array.from(storage.values())));

/**
 * A new Task will be added each minute if no period specified (e.g. NEW_TASK_PERIOD=60000)
 */
app.listen(port, () => {
    setInterval(() => storage.set(storage.size, new Task({id: storage.size, text: `Task ${storage.size}`, completed: !!Math.round(Math.random())})), newTaskPeriod);
    console.log(`Tasks Service listening on port ${port}`);
    console.log(`A new task will be added every ${newTaskPeriod} ms`);
});