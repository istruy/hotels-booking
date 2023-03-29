import { AuthorizationStatus, NameSpace } from '../../utils/const';
import { createSlice } from '@reduxjs/toolkit';
import { UserProcess } from '../../types/state';

const initialState: UserProcess = {
    authorizationStatus: AuthorizationStatus.NoAuth,
};

export const userProcess = createSlice({
    name: NameSpace.User,
    initialState,
    reducers: {
        requireAuthorization: (state, action) => {
            state.authorizationStatus = action.payload;
        },
    },
});

export const { requireAuthorization } = userProcess.actions;
