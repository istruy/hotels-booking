import { useRef } from "react";
import { useAppDispatch } from "../hooks";
import { AuthData } from "../types/auth-data";

type SignInScreenProps = {
    // language: Language;
    onClick: () => void;
}
// { language, onClick }: SignInScreenProps

function SignInScreen(): JSX.Element {
    const loginRef = useRef<HTMLInputElement | null>(null);
    const passwordRef = useRef<HTMLInputElement | null>(null);

    const dispatch = useAppDispatch();

    // const onSubmit = (authData: AuthData) => {
    //     dispatch(loginAction(authData));
    // };

    // const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    //     evt.preventDefault();

    //     if (loginRef.current !== null && passwordRef.current !== null) {
    //         onSubmit({
    //             login: loginRef.current.value,
    //             password: passwordRef.current.value,
    //         });
    //     }
    // };

    return (
        <div className="sign-in-main whole-screen">
            <div className="sign-in-container whole-screen">
                <form action="" className="sign-in__form">
                    <h3 className="sign-in__title">Simple Hotel Check</h3>
                    <div className="sign-in-field">
                        <input
                            ref={loginRef}
                            className="sign-in__input"
                            type="email"
                            name="user-email"
                        />
                        <label className="sign-in__label" htmlFor="user-email">Логин</label>
                    </div>
                    <div className="sign-in-field">
                        <input
                            ref={passwordRef}
                            className="sign-in__input"
                            type="password"
                            name="user-password"
                        />
                        <label className="sign-in__label" htmlFor="user-password">Пароль</label>
                    </div>
                    <div className="sign-in__submit">
                        <button className="sign-in__button" type="submit">Войти</button>
                    </div>
                </form>
            </div>
        </div>

    );
};

export default SignInScreen;