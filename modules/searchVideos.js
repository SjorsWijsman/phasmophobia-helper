const axios = require('axios')
const querystring = require('querystring')

require('dotenv').config()

const params = {
  part: 'snippet',
  maxResults: 3,
  key: process.env.API_KEY,
  type: 'video',
}

function searchVideos(term) {
  return axios.get('https://www.googleapis.com/youtube/v3/search?' + querystring.stringify({
    ...params,
    q: term,
  }))
  .then(response => {
    const result = response.data
    const videos = result.items.map(video => {
      return {
        id: video.id.videoId,
        link: 'https://www.youtube.com/watch?v=' + video.id.videoId,
        publishedAt: video.snippet.publishedAt,
        channelId: video.snippet.channelId,
        channelTitle: video.snippet.channelTitle,
        title: video.snippet.title,
        description: video.snippet.description,
        thumbnails: video.snippet.thumbnails
      }
    })
    return videos
  })
  .catch(err => {
    console.log(err)
  })
}


exports.getVideos = async (term) => {
  if (term) {
    return await searchVideos(term)
  }
}