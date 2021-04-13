const express = require('express')
const app = express()
const http = require('http').createServer(app)
const path = require('path')
const io = require('socket.io')(http)
const { getVideos } = require('./modules/searchVideos')
const port = process.env.PORT || 4000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.resolve('public')))

app.set('view engine', 'ejs');

app.get('/', async (req, res) => {
  res.render('index', {
    results: await getVideos(req.query.searchQuery) || [],
    searchQuery: req.query.searchQuery
  })
})

io.on('connection', (socket) => {
  console.log('user connected')

  socket.on('disconnect', () => {
    console.log('disconnected')
  })
})

http.listen(port, () => {
  console.log(`listening to port ${port}`)
})