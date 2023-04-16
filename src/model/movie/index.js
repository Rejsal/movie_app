export default {
  state: {
    loading: false,
    movieTitle: null,
    totalPage: 1,
    currentPage: 1,
    movies: [],
  },

  reducers: {
    //on request loading
    onRequest(state) {
      return {
        ...state,
        loading: true,
      };
    },

    //on get movies list
    onGetMovies(state, data) {
      return {
        ...state,
        loading: false,
        movieTitle: data?.title,
        totalPage: 3,
        currentPage: data?.page ?? 1,
        movies: data['content-items'].content
          ? [...state.movies, ...data['content-items'].content]
          : [...state.movies],
      };
    },
  },

  effects: dispatch => ({
    //get movies list
    async getMovies(page, _) {
      dispatch.movie.onRequest();
      const movieJson =
        page === 1
          ? require(`../../assets/api/CONTENTLISTINGPAGE-PAGE1.json`)
          : page === 2
          ? require(`../../assets/api/CONTENTLISTINGPAGE-PAGE2.json`)
          : require(`../../assets/api/CONTENTLISTINGPAGE-PAGE3.json`);
      if (movieJson?.page) {
        movieJson.page.page = page;
        setTimeout(() => {
          dispatch.movie.onGetMovies(movieJson?.page);
        }, 250);
      }
    },

    //search movies
    async searchMovies(searchKey, _) {},
  }),
};
