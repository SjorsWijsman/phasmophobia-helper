const express = require('express')
const app = express()
const http = require('http').createServer(app)
const path = require('path')
const io = require('socket.io')(http)

const port = process.env.PORT || 4000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.sendFile(path.resolve('build') + '/index.html')
})

io.on('connection', (socket) => {
  console.log('user connected')

  socket.on('disconnect', () => {
    console.log('disconnected')
  })

  socket.on('join', (room) => {
    socket.join(room)
  })

  socket.on('leave', (room) => {
    socket.leave(room)
  })

  socket.on('data', ([room, data]) => {
    socket.broadcast.to(room).emit('data', data)
  })
})


app.use(express.static(path.resolve('build')))

http.listen(port, () => {
  console.log(`listening to port ${port}`)
})