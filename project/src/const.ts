export enum AppRoute {
  Root = '/',
  Login = '/login',
  MyList = '/mylist',
  Film = '/films/:id/:tab',
  AddReview = '/films/:id/review',
  VideoPlayer = '/player/:id'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum APIRoute {
  Films = '/films',
  Login = '/login',
  Logout = '/logout',
}

export const FiltersByGenre = {
  ALL_GENRES: {
    filterName: 'All genres',
    filterValue: 'All'
  },
  COMEDIES: {
    filterName: 'Comedies',
    filterValue: 'Comedian'
  },
  CRIME: {
    filterName: 'Crime',
    filterValue: 'Crime'
  },
  DOCUMENTARY: {
    filterName: 'Documentary',
    filterValue: 'Documentary'
  },
  DRAMAS: {
    filterName: 'Dramas',
    filterValue: 'Drama'
  },
  HORROR: {
    filterName: 'Horror',
    filterValue: 'Horror'
  },
  KIDS_AND_FAMILY: {
    filterName: 'Kids & Family',
    filterValue: 'Family'
  },
  ROMANCE: {
    filterName: 'Romance',
    filterValue: 'Romance'
  },
  SCI_FI: {
    filterName: 'Sci-Fi',
    filterValue: 'SciFi'
  },
  THRILLERS: {
    filterName: 'Thrillers',
    filterValue: 'Thriller'
  },
} as const;

export const DEFAULT_RENDERED_FILMS_QUANTITY = 8;
export const FILMS_TO_RENDER_QUANTITY = 8;

export const TIMEOUT_SHOW_ERROR = 2000;
