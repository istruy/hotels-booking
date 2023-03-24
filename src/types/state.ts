import { store } from "../store";
import { AuthorizationStatus } from "../utils/const";

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type UserProcess = {
    authorizationStatus: AuthorizationStatus,
}