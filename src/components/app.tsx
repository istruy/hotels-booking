import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../utils/const';
import BookingScreen from './booking';
import PrivateRoute from './private-route';
import SignInScreen from './sign-in';

function App(): JSX.Element {
    // const { authorizationStatus } = useAppSelector(({ USER }) => USER);

    // if (authorizationStatus === AuthorizationStatus.Unknown || !isDataLoaded) {
    //     return (
    //         <LoadingScreen />
    //     );
    // }

    const authorizationStatus = AuthorizationStatus.Auth;

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path={AppRoute.Main} element={
                        <PrivateRoute authorizationStatus={authorizationStatus}><BookingScreen />
                        </PrivateRoute>} />
                    <Route path={AppRoute.SignIn} element={<SignInScreen />} />
                </Routes>
            </BrowserRouter>
        </>

    );
}

export default App;
