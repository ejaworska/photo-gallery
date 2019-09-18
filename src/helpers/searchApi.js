import { searchApiUrl } from './routes';
import { get } from './api';

export const getSearchImages = (query, page, perPage) => {
  return get(searchApiUrl(query, page, perPage)).catch(err => {
    console.log(`There has been a problem with your fetch operation: ${err}`);
  });
}
