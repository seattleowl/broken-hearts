/* 
    BROKEN HEARTS:
    A game by OwL

    All images, content and code are orginal. 
*/

const express = require("express")
const app = express()

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/src/html/index.html")
})

app.use(express.static("/src", "/src"))

app.listen(process.env.PORT)