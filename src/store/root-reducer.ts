import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../utils/const';
import { hotelsData } from './hotels-list/hotels-data';
import { userProcess } from './user-process/user-process';

export const rootReducer = combineReducers({
    [NameSpace.User]: userProcess.reducer,
    [NameSpace.Hotel]: hotelsData.reducer,
})