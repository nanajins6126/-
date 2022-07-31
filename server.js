const express = require("express")
const mongoose = require("mongoose");
const TableThreads = require("./models/TableThread")

const app = express();
app.use(express.static("public"));
app.use(express.json());

const PORT = 3000;

mongoose.connect("mongoDBのURLを入力する")
.then(() => console.log("db Connected"))
.catch((err) => console.log(err));

// GET Method
app.get("/api/v1/threads", async(req, res) => {
    try {
        const allTreads = await TableThreads.find({})
        res.status(200).json(allTreads)
    } catch(err) {
        console.log(err);
    }
});

// POST Method
app.post("/api/v1/thread", async(req, res) => {
    try {
        const createThread = await TableThreads.create(req.body)
        res.status(200).json(createThread)
    } catch(err) {
        console.log(err);
    }
});

app.listen(PORT, console.log("server running"))