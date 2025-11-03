import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    bikeList : [], // 대여 자전거 전체 데이터
    filteredBikeList: [], // 최종 필터링 목록을 저장할 새 상태
}

export const rentalSlice = createSlice({
    name: 'rentalBike',
    initialState,
    reducers: {
        addData: (state,action) =>{
            state.bikeList = [...state.bikeList, ...action.payload];
        },
        setFilteredList: (state, action) => {
            state.filteredBikeList = action.payload;
        }
    }
})

// Action creators are generated for each case reducer function
export const { addData, filteredBikeList } = rentalSlice.actions //API 함수 또는 컴포넌트에서 dispatch(액션함수)

export default rentalSlice.reducer //store import