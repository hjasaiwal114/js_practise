const express = require('express');

const app = express();

app.get("/test", async (req, res) {
    return res.status(200).json({ success: true});
});

app.listen(4000, () => {
    console.log("Server listening on port 4000");
});