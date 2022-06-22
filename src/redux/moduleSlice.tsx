import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TWords } from './../Components/module'
import {TModule} from './../Components/module2'

// type Basic = {
//     words: TWords[];
// }



type initialStateType = {
    module: TModule[];
}

const initialState: initialStateType = {
    module: [],
}

const ModuleSlice = createSlice({
    name: "Module",
    initialState,
    reducers: {
        addModule(state, action) {
            state.module[0].base.name = action.payload;
        },
    }   
})

export const {addModule} = ModuleSlice.actions;
export const reducerMod = ModuleSlice.reducer;