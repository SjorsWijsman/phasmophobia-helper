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

  socket.on('name', ([room, name]) => {
    socket.broadcast.to(room).emit('name', name)
  })

  socket.on('response', ([room, response]) => {
    socket.broadcast.to(room).emit('response', response)
  })

  socket.on('objectives', ([room, objectives]) => {
    socket.broadcast.to(room).emit('objectives', objectives)
  })

  socket.on('evidence', ([room, evidence]) => {
    socket.broadcast.to(room).emit('evidence', evidence)
  })
})


app.use(express.static(path.resolve('build')))

http.listen(port, () => {
  console.log(`listening to port ${port}`)
})