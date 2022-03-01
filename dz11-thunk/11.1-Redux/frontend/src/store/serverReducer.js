import { createSlice } from '@reduxjs/toolkit'




// SERVER:
// mainUrl - основной url к серверу
// actions = список команд и url-ов в формате {action, title, url}
const initialState = {
    mainUrl: '',
    actions: {}
};


const serverSlice = createSlice({
    name: 'server',
    initialState: initialState,
    reducers: {
        // установка основного URL
        // payload: url (string)
        setMainUrl(state, action) {
            state.mainUrl = action.payload;
        },
        // добавление новой команды и нового URL
        // payload: { action, title, url }
        addActionUrl(state, action) {
            state.actions[action.payload.action] = action.payload;
        },
    },
});


export const { setMainUrl, addActionUrl } = serverSlice.actions;
export default serverSlice.reducer;