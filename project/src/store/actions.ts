import { createAction } from '@reduxjs/toolkit';

export const changeSortType = createAction('changeSortType', (sortType) => ({
  payload: sortType
}));

export const changeCity = createAction('changeCity', (city) => ({
  payload: city
}));

export const setUserInfo = createAction('setUserInfo', (userInfo) => ({
  payload: userInfo
}));

export const setError = createAction<string | null>('setError');
