import { createReducer } from "@reduxjs/toolkit";
import { getGame, getGames, getGamesByGenre, getGenres, getNextPage, getPrevPage, sortBy, searchGames } from "./actions";

const initialState = {
    loading: true,
    gameDetail: null,
    games: null,
    genres: null,
    genre: null,
    page: 1,
    search: null,
    hasNext: false,
    hasPrev: false,
    addNewGame: null,
    order: null
}

export const rootReducer = createReducer(initialState, (builder) => {
     builder
        .addCase(getGames.pending, (state, action) => {
            state.loading = true;
            state.games = [];
        })
        .addCase(getGames.fulfilled, (state, action) => {
            state.loading = false;
            state.games = action.payload.videogames;
            state.hasNext = action.payload.hasNext;
            state.hasPrev = action.payload.hasPrev;
        })
        .addCase(getGame.pending, (state, action) => {
            state.gameDetail = null
        })
        .addCase(getGame.fulfilled, (state, action) => {
            state.gameDetail = action.payload
        })
        .addCase(getGenres.pending, (state, action) => {
            state.genres = null
        })
        .addCase(getGenres.fulfilled, (state, action) => {
            state.genres = action.payload
        })
        .addCase(getGamesByGenre.pending, (state, action) => {
            state.loading = true;
            state.games = [];
            state.search = null;
        })
        .addCase(getGamesByGenre.fulfilled, (state, action) => {
            state.loading = false;
            state.games = action.payload.videogames;
            state.genre = action.meta.arg;
            state.hasNext = action.payload.hasNext;
            state.hasPrev = action.payload.hasPrev;
        })
        .addCase(getNextPage.pending, (state, action) => {
            state.loading = true;
            state.games = [];
        })
        .addCase(getNextPage.fulfilled, (state, action) => {
            state.loading = false;
            state.games = action.payload.videogames;
            state.page = state.page + 1
            state.hasNext = action.payload.hasNext;
            state.hasPrev = action.payload.hasPrev;
        })
        .addCase(getPrevPage.pending, (state, action) => {
            state.loading = true;
            state.games = [];
        })
        .addCase(getPrevPage.fulfilled, (state, action) => {
            state.loading = false;
            state.games = action.payload.videogames;
            state.page = state.page - 1;
            state.hasNext = action.payload.hasNext;
            state.hasPrev = action.payload.hasPrev;
        })
        .addCase(sortBy.pending, (state, action) => {
            state.loading = true;
            state.games = [];
        })
        .addCase(sortBy.fulfilled, (state, action) => {
            state.loading = false;
            state.games = action.payload.videogames;
            state.hasNext = action.payload.hasNext;
            state.hasPrev = action.payload.hasPrev;
            state.order = action.payload.order;
        })
        .addCase(searchGames.pending, (state, action) => {
            state.loading = true;
            state.genre = null;
            state.games = [];
        })
        .addCase(searchGames.fulfilled, (state, action) => {
            state.loading = false;
            state.games = action.payload.videogames;
            state.search = action.meta.arg; 
            state.hasNext = action.payload.hasNext;
            state.hasPrev = action.payload.hasPrev;
        })
})