const express = require("express")
const { Http2ServerRequest } = require("http2")
const app = express()

app.use(express.static("public"))

const http = require("http").Server(app)
const PORT = 8000

const serverSocket = require("socket.io")(http)

http.listen(PORT, () => console.log(`Servidor Iniciado em ${PORT}`))

app.get("/", ( _ , res) => res.sendFile(`${__dirname}/index.html`))

serverSocket.on("connect", socket => {
    console.log(`Cliente ${socket.id} conectou`)
})