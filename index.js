const express = require('express')
const app = express()
const http = require('http').createServer(app)
const path = require('path')
const io = require('socket.io')(http)

const { games } = require('./data/games.js')
const { getVideos } = require('./modules/searchVideos')

const port = process.env.PORT || 4000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.resolve('public')))

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index')
})

app.get('/:game', (req, res) => {
  if (games.some(value => value === req.params.game.replace(/_/g, ' '))) {
    res.render('index', {
      games: games,
      game: req.params.game.replace(/_/g, ' '),
      videoId: null
    })
  } else {
    res.render('not-found', {
      games: games,
      game: req.params.game.replace(/_/g, ' '),
    })
  }
})

app.post('/:game', (req, res) => {
  let link = req.body.link
  if (req.body.link.includes('v=')) {
    link = link.split('v=').pop().split('&').shift()
  } else link = null

  res.render('index', {
    games: games,
    game: req.params.game.replace(/_/g, ' '),
    input: req.body.link,
    videoId: link
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