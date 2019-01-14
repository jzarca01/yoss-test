export const getFilmsFromResults = results =>
  results
    .map(result => result.known_for)
    .reduce((movie, films) => [...films, ...movie], []);

export const getActorsFromResults = results => new Set(results);
