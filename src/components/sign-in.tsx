import { FormEvent, useRef, useState } from "react";
import { useAppDispatch } from "../hooks";
import { requireAuthorization } from "../store/user-process/user-process";
import { AppRoute, AuthorizationStatus, emailRegexp, errorLoginPasswordMessage, passwordRegexp } from "../utils/const";
import { useNavigate } from "react-router-dom";
import { getHotelsListData } from "../actions/actions";
import { putDefaultData } from "../store/hotels-list/hotels-data";
import dayjs from 'dayjs';

function SignInScreen(): JSX.Element {
    const loginRef = useRef<HTMLInputElement | null>(null);
    const passwordRef = useRef<HTMLInputElement | null>(null);
    const [errorMessage, setErrorMessage] = useState<boolean>(false);
    let navigate = useNavigate();

    const dispatch = useAppDispatch();

    const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
        evt.preventDefault();

        if (loginRef.current !== null && passwordRef.current !== null
            && passwordRef.current.value.length >= 8 && passwordRegexp.test(passwordRef.current.value)
            && emailRegexp.test(loginRef.current.value)) {
            dispatch(putDefaultData());
            dispatch(getHotelsListData('Москва', dayjs().toString(), '1'));
            dispatch(requireAuthorization(AuthorizationStatus.Auth));
            navigate(AppRoute.Main);
        } else {
            setErrorMessage(true);
        }
    };

    return (
        <div className="sign-in-main whole-screen">
            <div className="sign-in-container whole-screen">
                <div className="sign-in-wrapper rounded">
                    <form action="" className="sign-in__form" onSubmit={handleSubmit}>
                        <h3 className="sign-in__title header">Simple Hotel Check</h3>
                        <div className={`sign-in-field ${errorMessage ? 'error' : ''} `}>
                            <label className="sign-in__label" htmlFor="user-email">Логин</label>
                            <input
                                ref={loginRef}
                                className={`sign-in__input input-text ${errorMessage ? 'error' : ''} `}
                                type="email"
                                name="user-email"
                            />
                        </div>
                        <div className={`sign-in-field ${errorMessage ? 'error' : ''} `}>
                            <label className="sign-in__label" htmlFor="user-password">Пароль</label>
                            <input
                                ref={passwordRef}
                                className="sign-in__input input-text"
                                type="password"
                                name="user-password"
                            />
                            <div className="error-message error">{errorMessage ? errorLoginPasswordMessage : ''}</div>
                        </div>
                        <div className="sign-in__submit">
                            <button className="sign-in__button button" type="submit">Войти</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    );
};

export default SignInScreen;