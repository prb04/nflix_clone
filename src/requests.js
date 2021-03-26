/* eslint-disable no-template-curly-in-string */
// eslint-disable-next-line no-unused-vars

const APIKey = "023a33653b6a0546b7ca72a00ccc6469";

const requests = {
    fetchTrending: `/trending/all/week?api_key=${APIKey}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${APIKey}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${APIKey}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${APIKey}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${APIKey}&with_generes=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${APIKey}&with_generes=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${APIKey}&with_generes=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${APIKey}&with_generes=99`,
}

export default requests;