import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    isModalOpen: false,
  },
  reducers: {
    setModalOpen(state, action) {
      state.isModalOpen = action.payload;
    },
  },
});

export const { setModalOpen } = modalSlice.actions;
export default modalSlice.reducer;
