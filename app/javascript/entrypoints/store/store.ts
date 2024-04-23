import { configureStore } from "@reduxjs/toolkit";
import { NewUserReducer } from "../reducers";
import sessionSlice from "../reducers/session";
import {
  CategorySlice,
  CategoriesSlice,
  ProductSlice,
  ReviewSlice,
} from "../reducers";

const store = configureStore({
  reducer: {
    newuser: NewUserReducer,
    user: sessionSlice,
    category: CategorySlice,
    categories: CategoriesSlice,
    product: ProductSlice,
    review: ReviewSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActionPaths: ["meta.arg", "payload.timestamp"],
        ignoredPaths: ["items.dates"],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
