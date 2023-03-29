import store from "../store";
import { AuthorizationStatus } from "../utils/const";

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type UserProcess = {
    authorizationStatus: AuthorizationStatus,
}

export type HotelsList = {
    location: string,
    dateCheckIn: string,
    countDay: number,
    hotels: Hotel[],
    images: string[],
}

export type Hotel = {
    location: {
        country: string,
        geo: {
            lon: number,
            lat: number
        },
        state: null,
        name: string
    },
    priceAvg: number,
    pricePercentile: {
        3: number,
        10: number,
        35: number,
        50: number,
        75: number,
        99: number,
    },
    hotelName: string,
    stars: number,
    locationId: number,
    hotelId: number,
    priceFrom: number,
    favorite?: boolean,
}