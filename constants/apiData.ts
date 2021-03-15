

export const apiKey         = '1a09dcf42c6c621e5b547c2f53c489b3';
export const urlBase        = 'https://api.themoviedb.org/3/tv/';
export const urlImage       = 'https://image.tmdb.org/t/p/w500';
export const langRes        = '&language=es-MX';
export const getTvPopular   = `${urlBase}popular?api_key=${apiKey}${langRes}`;
export const getTvTopRate   = `${urlBase}top_rated?api_key=${apiKey}${langRes}`;
export const airingToday    = `${urlBase}airing_today?api_key=${apiKey}${langRes}`;