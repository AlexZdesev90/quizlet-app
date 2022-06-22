import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TWords } from './../Components/module';

type initialStateType = {
    words: TWords[];
}

const initialState: initialStateType = {
    words: [],
}

const WordsSlice = createSlice({
    name: "Quizlet",
    initialState,
    reducers: {
        addWords(state, action: PayloadAction<string[]>) {
            state.words.push({
                id: Math.round(Math.random()*100).toString(),
                word1: action.payload[0],
                word2: action.payload[1],
            }, )
        },
        deleteWords(state, action: PayloadAction<string>) {
            state.words = state.words.filter(word => word.id !== action.payload);
        },
       
    }
})

export const { addWords, deleteWords } = WordsSlice.actions;
export const reducer = WordsSlice.reducer;