/* 
    BROKEN HEARTS:
    A game by OwL

    All images, content and code are orginal. 
*/

const express = require("express")
const socket = require("socket.io")
const app = express()
const http = require("http").createServer(app)
const io = socket(http)

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/src/html/index.html")
})

io.on("connection", () => {
    console.log("Socket working")
})

app.use("/src", express.static("src"))

http.listen(process.env.PORT)