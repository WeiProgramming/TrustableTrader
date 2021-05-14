import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    username: '',
    email: '', 
    photo: '',
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserLogin: (state, action) => {
            state.email = action.payload.email;
            state.photo = action.payload.photoURL;
            state.username = action.payload.username;
        },
        setUserLogout: (state) => {
            state.email = null;
            state.photo = null;
            state.username = null;
        }
    }
});

//export the actions
export const {setUserLogin, setUserLogout} = userSlice.actions;
export const selectUserName = (state) => state.user.username;
export const selectEmail = (state) => state.user.email;
export const selectPhoto = (state) => state.user.photo;


export default userSlice.reducer;