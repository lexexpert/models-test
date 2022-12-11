import { createSlice } from '@reduxjs/toolkit';
// types
import { Category } from '../../types/category.type';

// ----------------------------------------------------------------------
export type ReduxCategoriesType = {
  selected?: Category;
  all: Category[];
};

export const categoriesInitialState: ReduxCategoriesType = {
  selected: undefined,
  all: [],
};

const slice = createSlice({
  name: 'categories',
  initialState: categoriesInitialState,
  reducers: {
    setCategories: (state, action) => {
      state.all = action.payload;
    },
    setSelectedCategory: (state, action) => {
      state.selected = action.payload;
    },
  },
});

// Reducer
export const categoriesReducer = slice.reducer;

// Actions
export const { setCategories, setSelectedCategory } = slice.actions;
