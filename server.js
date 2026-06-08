import express from 'express'
import 'dotenv/config'
import path from 'path'
const app = express()

app.use(express.json())
app.use(express.static('public'))

app.get("/orbital", (req, res) => {
  res.sendFile(path.resolve("public/orbital.html"))
})

app.get("/finaxis", (req, res) => {
  res.sendFile(path.resolve("public/finaxis.html"))
})

app.get('/meubanco', (req, res) => {
  res.sendFile(path.resolve("public/meubanco.html"))
})

import orbBrain from "./api/orb/brain.js"

app.use("/api/orb", orbBrain)

app.get("/orb", (req, res) => {
  res.sendFile(path.resolve("public/orb.html"))
})

app.listen(8080, () => console.log('Rodando em http://localhost:8080\n\napps:\nfinaxis.html\norbital\nngc.html\norb\ntesouro-simulador.html'))

