import { createAction } from '@reduxjs/toolkit'
import { AppRoute, GET_HOTEL_LIST, redirectToMainScreen } from '../utils/const'

export const redirectToMain = createAction<AppRoute>(redirectToMainScreen);

export const getHotelsListData = (location: string, checkIn: string, countDay: string) => ({
    type: GET_HOTEL_LIST, data: {
        location: location,
        checkIn: checkIn,
        countDay: countDay
    }
})
