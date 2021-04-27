const express = require('express')
const app = express()
const http = require('http').createServer(app)
const path = require('path')
const io = require('socket.io')(http)
const MongoClient = require('mongodb').MongoClient

require('dotenv').config()
const dbuser = process.env.DB_USER
const dbpassword = process.env.DB_PASS
const dbname = process.env.DB_NAME

// Connect to MongoDB
const uri = `mongodb+srv://${dbuser}:${dbpassword}@${dbname}.mongodb.net/phasmophobia-database?retryWrites=true&w=majority`;
const options = {
  useNewUrlParser: true, 
  useUnifiedTopology: true 
}
let db = null
let rooms = null
MongoClient.connect(uri, options, function(err, client) {
  if (err) throw err
  else {
    db = client.db('phasmophobia-database')
    rooms = db.collection('rooms')
    try {
      rooms.createIndex( { "createdAt": 1 }, { expireAfterSeconds: 60 * 60 * 12 } )
    } catch (error) {
      console.error(error)
    }
  }
})

const port = process.env.PORT || 4000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.sendFile(path.resolve('build') + '/index.html')
})

io.on('connection', (socket) => {
  // User joins a room
  socket.on('join', async ([room, data]) => {

    // Find roomId from database
    const roomData = await rooms.findOne({
      "roomId": room
    })

    // Send roomData to user if it exists
    if (roomData) {
      io.to(socket.id).emit('data', roomData)
    } // Else, create a new database document
    else {
      rooms.insertOne(
        {
          "createdAt": new Date(),
          "roomId": room,
          ...data
        }
      )
    }

    socket.join(room)
  })

  // User leaves a room
  socket.on('leave', (room) => {
    socket.leave(room)
  })

  // User emits data
  socket.on('data', ([room, data]) => {
    rooms.updateOne(
      { "roomId": room }, 
      {
        $set: { ...data }
      }
    )
    socket.broadcast.to(room).emit('data', data)
  })
})


app.use(express.static(path.resolve('build')))

http.listen(port, () => {
  console.log(`listening to port ${port}`)
})