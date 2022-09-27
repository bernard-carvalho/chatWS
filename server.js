const express = require("express")
const { Http2ServerRequest } = require("http2")
const app = express()

app.use(express.static("public"))

const http = require("http").Server(app)
const PORT = process.env.PORT || 8000

const serverSocket = require("socket.io")(http)

http.listen(PORT, () => console.log(`Servidor Iniciado em ${PORT}`))

app.get("/", ( _ , res) => res.sendFile(`${__dirname}/index.html`))

//serverSocket.on()

serverSocket.on("connect", socket => {
    console.log(`Cliente ${socket.id} conectou`)
    let username
    socket.on("login", msg => {
        username=msg;
        console.log(`Usuario logado de de ${socket.id}: ${username}`)
        serverSocket.emit("chat msg",`Usuario logado: ${username}`)
        })
    socket.on("chat msg", msg => {
        console.log(`Msg recebida de ${socket.id}: ${msg}`)
        serverSocket.emit("chat msg",`Msg enviada por ${username}: ${msg}`)
        })
})
