import { useRef } from "react";

function BookingScreen(): JSX.Element {
    const locationRef = useRef<HTMLInputElement | null>(null);
    const dateRef = useRef<HTMLInputElement | null>(null);
    const countDayRef = useRef<HTMLInputElement | null>(null);

    return (
        <div className="booking-main whole-screen">
            <div className="booking-container">
                <div className="booking-nav">
                    <h3 className="booking-header">Simple Hotel Check</h3>
                    <div className="booking-exit">
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
                        <form action="" className="request__form">
                            <div className="request__field">
                                <label className="request___label" htmlFor="location-hotel">Локация</label>
                                <input
                                    ref={locationRef}
                                    className="request__input"
                                    type="text"
                                    name="location-hotel"
                                />
                            </div>
                            <div className="request__field">
                                <label className="request___label" htmlFor="user-password">Дата заселения</label>
                                <input
                                    ref={dateRef}
                                    className="request__input"
                                    type="date"
                                    name="user-password"
                                />
                            </div>
                            <div className="request__field">
                                <label className="request___label" htmlFor="user-password">Количество дней</label>
                                <input
                                    ref={countDayRef}
                                    className="request__input"
                                    type="number"
                                    name="user-password"
                                />
                            </div>
                            <div className="request__submit">
                                <button className="request__button" type="submit">Найти</button>
                            </div>
                        </form>
                    </section>

                    <section className="hotels-container rounded">
                        <div className="hotels-header">
                            <div className="header-description">
                                <div className="header-title">Отели</div>
                                <svg width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 1.33334L9.66667 10L1 18.6667" stroke="#A7A7A7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <div className="header-title">Москва</div>
                            </div>
                            <div className="header-date">07 июля 2020</div>
                        </div>
                        <div className="hotels-images">
                            <img src="" className="hotel-image" alt="" />
                        </div>
                        <div>
                            <div>Добавлено в избранное</div>
                            <div><strong></strong> отеля</div>
                        </div>
                        <div className="hotels-list">
                            <div>
                                <div><img src="" alt="" /></div>
                                <div className="hotel-name"></div>
                                <div className="hotel-favorite"></div>
                                <div className="date-arrival"></div>
                                <div className="dash"></div>
                                <div>число день</div>
                                <div className="hotel-stars"></div>
                            </div>
                            <div>
                                <div>Price</div>
                                <div>сумма</div>
                            </div>
                        </div>
                    </section>
                    <section className="favorite-list rounded">
                        <div className="favorite-menu">
                            <div>
                                <input type="number" min="0" max="" />
                            </div>
                            <div>
                                <input type="number" min="0" max="" />
                            </div>
                            <div>
                                <div className="hotels-list">
                                    <div>
                                        <div><img src="" alt="" /></div>
                                        <div className="hotel-name"></div>
                                        <div className="hotel-favorite"></div>
                                        <div className="date-arrival"></div>
                                        <div className="dash"></div>
                                        <div>число день</div>
                                        <div className="hotel-stars"></div>
                                    </div>
                                    <div>
                                        <div>Price</div>
                                        <div>сумма</div>
                                    </div>
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