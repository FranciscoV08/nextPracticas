import { createSlice, PayloadAction } from '@reduxjs/toolkit'


interface nameAnimeState{
    name: string;
}

// Le digo que sera de un tipado que quiero, En este caso nameAnimeState
const initialState:nameAnimeState = {
    name: 'Kimetsu no Yaiba',
}

const animeSlice = createSlice({
    // Nombre del slice
  name: 'Tu anime',
  initialState,
    //Acciones que cambien el valor del state
  reducers: {
    cambiarName: (state, action:PayloadAction<string>) => {
      state.name = action.payload
    }
  }
});

export const {cambiarName} = animeSlice.actions

export default animeSlice.reducer