import { RES_PER_PAGE } from '../config/config';

const state = {
  recipe: {},
  search: {
    query: '',
    result: [],
    resultPerPage: RES_PER_PAGE,
    page: 1,
  },
  bookmarks: [],
};

export default state;
