import { createAction } from '@reduxjs/toolkit';
import { Films } from '../types/film';
import { Reviews } from '../types/review';
import { AuthorizationStatus } from '../const';

export const changeGenreAction = createAction('/activeGenre', (genre: string) => ({
  payload: genre
}));

export const renderMoreFilms = createAction('/renderedFilms');

export const resetRenderedFilms = createAction('/renderedFilmsByDefault');

export const filterFilmsByGenreAction = createAction('/filmsByGenre', (genre: string) => ({
  payload: genre
}));

export const loadFilms = createAction<Films>('data/loadFilms');

export const loadReviews = createAction<Reviews>('data/loadReviews');

export const setFilmsDataLoadingStatus = createAction<boolean>('data/setFilmsDataLoadingStatus');

export const setReviewsDataLoadingStatus = createAction<boolean>('data/setReviewsDataLoadingStatus');

export const setReviewDataPostingStatus = createAction<boolean>('data/setReviewDataPostingStatus');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const redirectToRoute = createAction<string>('/redirectToRoute');
