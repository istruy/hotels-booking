import axios from "axios";
import { Hotel } from "../types/state";
import { APIRoute } from "../utils/const";
import { getLatinFromCyrillic } from "../utils/functions";
import dayjs from 'dayjs';

export const fectchHotelsList = async (requestValue: { location: string, checkIn: string, countDay: string }) => {
    const { location, checkIn, countDay } = requestValue;

    const checkOut = dayjs(checkIn, 'DD.MM.YYYY').add(Number(countDay), 'day').format('YYYY-MM-DD').toString()
    const { data } = await axios.get<Hotel>(APIRoute, {
        params: {
            checkIn: dayjs(checkIn).format('YYYY-MM-DD'),
            location: getLatinFromCyrillic(location),
            checkOut: checkOut,
            limit: 10,
            currency: 'rub',
            token: '0d4819187fea06071b2e04fd219fc6b1:421034',
        }
    });
    return data;
}
