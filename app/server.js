const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        service: "TaskMaster-API",
        status: "running",
        version: "1.0.0"
    });
});

app.get("/api/tasks", (req, res) => {
    res.json([
        {
            id: 1,
            title: "Complete SEC 385 lab",
            status: "in-progress"
        },
        {
            id: 2,
            title: "Configure DevSecOps pipeline",
            status: "pending"
        }
    ]);
});

app.get("/health", (req, res) => {
    res.json({
        status: "healthy"
    });
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, "0.0.0.0", () => {
    console.log(`TaskMaster-API listening on port ${PORT}`);
});
