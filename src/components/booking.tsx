import dayjs from "dayjs";
import { FormEvent, useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getHotelsListData } from "../actions/actions";
import { useAppDispatch, useAppSelector } from "../hooks";
import { requireAuthorization } from "../store/user-process/user-process";
import { Hotel } from "../types/state";
import { AppRoute, AuthorizationStatus } from "../utils/const";
import HotelComponent from "./hotel";
require('dayjs/locale/ru');

function BookingScreen(): JSX.Element {
    const locationRef = useRef<HTMLInputElement | null>(null);
    const dateRef = useRef<HTMLInputElement | null>(null);
    const countDayRef = useRef<HTMLInputElement | null>(null);
    const rangInputRef = useRef<HTMLInputElement | null>(null);
    const priceInputRef = useRef<HTMLInputElement | null>(null);
    let navigate = useNavigate();
    const { hotels, location, dateCheckIn, countDay } = useAppSelector(({ HOTEL }) => HOTEL);
    const dispatch = useAppDispatch();

    if (hotels.length === 0) {
        dispatch(getHotelsListData(location, dateCheckIn, countDay.toString()))
    };

    dayjs.locale('ru');

    const [allHotels, setAllHotels] = useState<Hotel[]>(hotels);
    const [favoriteHotels, setFavoriteHotels] = useState<JSX.Element[]>();
    const [countFavorite, setCountFavorite] = useState<number>(0);
    const [rang, setRang] = useState<string>('');
    const [price, setPrice] = useState<string>('');

    const addOrDeleteFavoriteHotel = (item: Hotel) => {
        setAllHotels(allHotels.map((element) => {
            if (element.hotelId === item.hotelId) {
                setCountFavorite(element.favorite === true ? countFavorite - 1 : countFavorite + 1);
                return { ...element, favorite: !element.favorite };
            } else return element;
        }))
    };

    useEffect(() => {
        setAllHotels(hotels);
    }, [hotels])

    const getHotels = (evt: FormEvent<HTMLFormElement>) => {
        evt.preventDefault();

        if (locationRef.current !== null && dateRef.current !== null && countDayRef.current !== null) {
            const checkIn = dayjs(dateRef.current.value).format('YYYY-MM-DD');
            dispatch(getHotelsListData(locationRef.current.value, checkIn, countDayRef.current.value));
        }
    }

    const handleSubmitExit = () => {
        dispatch(requireAuthorization(AuthorizationStatus.NoAuth));

        navigate(AppRoute.SignIn);

    }

    const handleRangClick = () => {
        if (rangInputRef.current !== null) {
            setRang(rangInputRef.current.value);
        }
    }

    const handlePriceClick = () => {
        if (priceInputRef.current !== null) {
            setPrice(priceInputRef.current.value);
        }
    }

    useEffect(() => {
        const filteredHotel: JSX.Element[] = allHotels.filter((item) => item.favorite)
            .filter(item => rang !== '' ? item.stars === Number(rang) : true)
            .filter(item => price !== '' ? item.priceAvg <= Number(price) : true)
            .map((item) => <HotelComponent key={item.hotelId} favorite={item.favorite} hotel={item} onClickFavorite={() => addOrDeleteFavoriteHotel(item)} />);
        setFavoriteHotels(filteredHotel);
    }, [price, rang, countFavorite]);

    return (
        <div className="booking-main whole-screen">
            <div className="booking-container">
                <div className="booking-nav">
                    <h3 className="booking__header header">Simple Hotel Check</h3>
                    <div className="booking-exit" onClick={handleSubmitExit}>
                        <div className="exit-title">Выйти</div>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H9" stroke="#41522E" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M16 17L21 12L16 7" stroke="#41522E" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M21 12H9" stroke="#41522E" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                </div>
                <main className="booking-wrapper">
                    <section className="booking-request rounded">
                        <form action="" className="request__form" onSubmit={getHotels}>
                            <div className="request__field">
                                <label className="request___label" htmlFor="location-hotel">Локация</label>
                                <input
                                    ref={locationRef}
                                    className="request__input input-text"
                                    type="text"
                                    name="location-hotel"
                                />
                            </div>
                            <div className="request__field">
                                <label className="request___label" htmlFor="user-password">Дата заселения</label>
                                <input
                                    ref={dateRef}
                                    className="request__input input-text"
                                    type="date"
                                    name="user-password"
                                />
                            </div>
                            <div className="request__field">
                                <label className="request___label" htmlFor="user-password">Количество дней</label>
                                <input
                                    ref={countDayRef}
                                    className="request__input input-text"
                                    type="number"
                                    name="user-password"
                                />
                            </div>
                            <div className="request__submit">
                                <button className="request__button button" type="submit">Найти</button>
                            </div>
                        </form>
                    </section>

                    <section className="hotels-container rounded">
                        <div className="hotels">
                            <div className="hotels-header">
                                <div className="header-description">
                                    <div className="header-title">Отели</div>
                                    <svg width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 1.33334L9.66667 10L1 18.6667" stroke="#A7A7A7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <div className="header-title">{location}</div>
                                </div>
                                <div className="header-date">{dayjs(dateCheckIn).format('DD MMMM YYYY')}</div>
                            </div>
                            <div className="hotels-images">
                                <img src="" className="hotel-image" alt="" />
                            </div>
                            <div className="favorite-hotels">
                                <div>Добавлено в избранное:</div>
                                <div className="count-favorite">
                                    <div className="count">{countFavorite}</div>
                                    <div>отеля</div>
                                </div>
                            </div>
                            <div className="hotels-all">
                                <div className="hotels-list">
                                    {allHotels.map((item, index) => <HotelComponent key={index} hotel={item} onClickFavorite={() => addOrDeleteFavoriteHotel(item)} />)}
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="favorite-list rounded">
                        <div className="favorite-container">
                            <div className="favorite-title">Избранное</div>
                            <div className="favorite-menu">
                                <div>
                                    <input className="rang input" ref={rangInputRef} type="number" min="0" max="5" onInput={handleRangClick} placeholder="Рейтинг" />
                                </div>
                                <div>
                                    <input className="price input" ref={priceInputRef} type="number" min="0" max="" onInput={handlePriceClick} placeholder="Цена" />
                                </div>
                            </div>
                            <div>
                                <div className="hotels-list">
                                    {favoriteHotels}

                                    {/* <div className="hotel-information">
                                        <div className="hotel-description">
                                            <div className="hotel-name">Moscow Marriott Grand Hotel</div>
                                            <div className="date-arrival">7 июля 2020</div>
                                            <div className="dash"></div>
                                            <div className="period">1 день</div>
                                            <div className="hotel-stars">{getStars()}</div>
                                        </div>
                                    </div>
                                    <div className="hotel-number-favorite">
                                        <div className="hotel-favorite"></div>
                                        <div className="price-word">Price:</div>
                                        <div className="hotel-price">23 924 ₽</div>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    );
};

export default BookingScreen;