import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { loginUser, logoutUser } from '../services';
import LocalStorage from '../helpers/localStorage';

type SliceState = { 
    user: {}
    error: string | null
    isAuthenticated: boolean
    loading: 'idle' | 'pending' | 'succeeded' | 'failed'
}

const initialState = {
    user: {},
    isAuthenticated: false,
    error: "",
    loading: 'idle',
} as SliceState

const sessionSlice = createSlice({
    name: 'session',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(loginUser.pending, (state, action) => {
            state.loading = 'pending';
        }).addCase(loginUser.rejected, (state, action) => {
            state.loading = 'failed';
            state.error = action.error.message!
        }).addCase(loginUser.fulfilled, (state, action) => {
            state.loading = 'succeeded'
            state.isAuthenticated = true;
            state.user = action.payload;
            // window.history.pushState({}, '', '/');
            // window.location.reload();
        });

        builder.addCase(logoutUser.pending, (state, action) => {
            state.loading = 'pending';
            state.isAuthenticated = true;
        }).addCase(logoutUser.rejected, (state, action) => {
            state.loading = 'failed';
            state.isAuthenticated = true;
            state.error = action.error.message!
            window.history.pushState({}, '', '/');
            window.location.reload();
        }).addCase(logoutUser.fulfilled, (state, action) => {
            state.loading = 'succeeded'
            state.user = action.payload;
            LocalStorage.removeUser();
            window.history.pushState({}, '', '/');
            window.location.reload();
        });
    }
})

export default sessionSlice.reducer;