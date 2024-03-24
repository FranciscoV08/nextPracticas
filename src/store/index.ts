import { configureStore } from '@reduxjs/toolkit'
import nameAnimeReducer from './nameA/animeSlice'
// import nameAnime from './nameA/animeSlice'
import { useDispatch, useSelector,TypedUseSelectorHook } from 'react-redux';

export const store = configureStore({
    // Aqui dentro se coloca todos los reducer 
  reducer: {
    name: nameAnimeReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
// 
export type RootState = ReturnType<typeof store.getState>
// Inferred type:  {posts: PostsState, comments: CommentsState, users: UsersState}
// Tipado estricto
export type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector