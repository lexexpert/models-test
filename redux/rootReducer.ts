import { AnyAction, CombinedState, combineReducers, Reducer } from '@reduxjs/toolkit';
import createWebStorage from 'redux-persist/lib/storage/createWebStorage';
import { categoriesReducer, ReduxCategoriesType } from './slices/categories.slice';

export type ReduxState = {
  categories: ReduxCategoriesType;
};

const createNoopStorage = () => ({
  getItem() {
    return Promise.resolve(null);
  },
  setItem(_key: string, value: string) {
    return Promise.resolve(value);
  },
  removeItem() {
    return Promise.resolve();
  },
});

export const storage =
  typeof window !== 'undefined' ? createWebStorage('local') : createNoopStorage();

const rootPersistConfig = {
  key: 'root',
  storage,
  keyPrefix: 'redux-',
  // whitelist: [], // save in local storage
  blacklist: ['form', 'product', 'categories'], // not save in local storage
};

const rootReducer: Reducer<CombinedState<ReduxState>, AnyAction> = combineReducers({
  categories: categoriesReducer,
});

export { rootReducer, rootPersistConfig };
