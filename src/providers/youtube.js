import youtubeSearch from 'youtube-search-promise'
export default query => {
  let params = {
    maxResults: 12,
    key: 'AIzaSyD26TNrRiqypoNaWT5JqgtZyaPHdZeO3RM'
  }
  return youtubeSearch(query, params)
}
