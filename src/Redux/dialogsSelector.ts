import {AppStateType} from "./reduxStore";
import {createSelector} from "reselect";

const getMessagePageSelector = (state: AppStateType) => {
    return state.messagePage;
};

export const getMessagePage = createSelector(getMessagePageSelector, (message) => {
    return message;
});