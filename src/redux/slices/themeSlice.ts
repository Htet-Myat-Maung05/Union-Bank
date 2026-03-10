import { createSlice } from "@reduxjs/toolkit"
import { Appearance } from "react-native"

interface ThemeTypes {
    isDarkMode: boolean
}

const initialState: ThemeTypes = {
    isDarkMode: Appearance.getColorScheme() === 'dark'
}

const themeSlice = createSlice({
    name: 'theme',
    initialState: initialState,
    reducers: {
        toggleTheme: state => { state.isDarkMode = !state.isDarkMode },
    }
})

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer