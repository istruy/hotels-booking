import { useRef } from "react";

function BookingScreen(): JSX.Element {
    const locationRef = useRef<HTMLInputElement | null>(null);
    const dateRef = useRef<HTMLInputElement | null>(null);
    const countDayRef = useRef<HTMLInputElement | null>(null);

    return (
        <div>
            <div>
                <h3>Simple Hotel Check</h3>
                <div>
                    <div>Выйти</div>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H9" stroke="#41522E" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M16 17L21 12L16 7" stroke="#41522E" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M21 12H9" stroke="#41522E" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>
            </div>
            <main>
                <section>
                    <form action="">
                        <div className="sign-in-field">
                            <input
                                ref={locationRef}
                                className="sign-in__input"
                                type="email"
                                name="user-email"
                            />
                            <label className="sign-in__label" htmlFor="user-email">Локация</label>
                        </div>
                        <div className="sign-in-field">
                            <input
                                ref={dateRef}
                                className="sign-in__input"
                                type="date"
                                name="user-password"
                            />
                            <label className="sign-in__label" htmlFor="user-password">Дата заселения</label>
                        </div>
                        <div className="sign-in-field">
                            <input
                                ref={countDayRef}
                                className="sign-in__input"
                                type="number"
                                name="user-password"
                            />
                            <label className="sign-in__label" htmlFor="user-password">Количество дней</label>
                        </div>
                        <div className="sign-in__submit">
                            <button className="sign-in__button" type="submit">Найти</button>
                        </div>
                    </form>
                </section>
                <section className="hotels-container">
                    <div className="hotels-menu">
                        <div>Отели</div>
                        <svg width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1.33334L9.66667 10L1 18.6667" stroke="#A7A7A7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <div></div>
                        <div></div>
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
                            <div className="favorite"></div>
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

            </main>
        </div>
    );
};

export default BookingScreen;