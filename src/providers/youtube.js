import youtubeSearch from 'youtube-search-promise'
export default query => {
  let params = {
    maxResults: 12,
    key: env('YOUTUBE_API_KEY')
  }
  return youtubeSearch(query, params)
}
