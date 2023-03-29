import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useAppSelector } from '../hooks';
import NotFoundScreen from '../page/not-found';
import { AppRoute } from '../utils/const';
import BookingScreen from './booking';
import PrivateRoute from './private-route';
import SignInScreen from './sign-in';

function App(): JSX.Element {
    const { authorizationStatus } = useAppSelector(({ USER }) => USER);

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path={AppRoute.Main} element={
                        <PrivateRoute authorizationStatus={authorizationStatus}><BookingScreen />
                        </PrivateRoute>} />
                    <Route path={AppRoute.SignIn} element={<SignInScreen />} />
                    <Route path='*' element={<NotFoundScreen />} />
                </Routes>
            </BrowserRouter>
        </>

    );
}

export default App;
