const youtubeSearch = require('youtube-search')
require('dotenv').config()

const options = {
  maxResults: 10,
  key: process.env.API_KEY,
}

exports.searchVideos = (query) => {
  youtubeSearch(query, options, (err, results) => {
    if(err) return console.log(err)
  
    console.dir(results)
  })
}
