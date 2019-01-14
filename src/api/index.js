import config from '../config/config.json';
import MovieDb from 'moviedb-promise';

export default new MovieDb(config.themoviedb.apiKey);
