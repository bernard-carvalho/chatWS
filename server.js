const express = require("express")
const { Http2ServerRequest } = require("http2")
const app = express()

const http = require("http").Server(app)
const PORT = 8000

http.listen(PORT, () => console.log(`Servidor Iniciado em ${PORT}`))


