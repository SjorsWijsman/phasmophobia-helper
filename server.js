const express = require('express')
const app = express()
const http = require('http').createServer(app)
const path = require('path')
const io = require('socket.io')(http)

const port = process.env.PORT || 4000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.resolve('build')))

io.on('connection', (socket) => {
  console.log('user connected')

  socket.on('disconnect', () => {
    console.log('disconnected')
  })

  socket.on('name', (value) => {
    socket.broadcast.emit('name', value)
  })

  socket.on('response', (value) => {
    socket.broadcast.emit('response', value)
  })

  socket.on('objectives', (value) => {
    socket.broadcast.emit('objectives', value)
  })

  socket.on('evidence', (value) => {
    socket.broadcast.emit('evidence', value)
  })
})

http.listen(port, () => {
  console.log(`listening to port ${port}`)
})