import { configureStore, createSlice } from "@reduxjs/toolkit";

type store = {
  count: number;
  enableLogin:boolean
};

const initialState: store = {
  count: 0,
  enableLogin:false
};

const slice = createSlice({
  name: "requestsCount",
  initialState,
  reducers: {
    increment: (state) => {
      state.count++;
    },
    decrement: (state) => {
      state.count--;
    },
  },
});

export const sliceActions = slice.actions;

const store = configureStore({
  reducer: slice.reducer,
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
