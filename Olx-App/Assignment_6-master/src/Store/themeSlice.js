import { createSlice } from '@reduxjs/toolkit'

const themeSlice = createSlice({
  name: 'Theme',
  initialState: {
    theme: 'red'
  },
  reducers: {
    setTheme: state => {
      state.theme = 'blue'
    }
  }
})

export default themeSlice
export const { setTheme } = themeSlice.actions