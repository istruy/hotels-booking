import { NameSpace } from '../../utils/const';
import { createSlice } from '@reduxjs/toolkit';
import { Hotel, HotelsList } from '../../types/state';
import dayjs from 'dayjs';

const initialState: HotelsList = {
    location: 'Москва',
    dateCheckIn: dayjs().toString(),
    countDay: 1,
    hotels: [],
    images: [],
};

export const hotelsData = createSlice({
    name: NameSpace.Hotel,
    initialState,
    reducers: {
        putHotelList: (state, action) => {
            const hotels = action.payload;
            state.hotels = hotels.map((item: Hotel) => {
                let hotelList = Object.assign({}, item);
                hotelList.favorite = false;
                return hotelList;
            });
        },
        putCheckInInformation: (state, action) => {
            state.location = action.payload.location[0].toUpperCase() + action.payload.location.slice(1);
            state.dateCheckIn = action.payload.checkIn;
            state.countDay = action.payload.countDay;
        },
        putDefaultData: (state) => {
            state.location = 'Москва';
            state.dateCheckIn = dayjs().toString();
            state.countDay = 1
        }
    },
});

export const { putHotelList, putCheckInInformation, putDefaultData } = hotelsData.actions;
