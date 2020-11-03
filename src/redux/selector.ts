import { AppStateType } from "./redux-store";

export const getOrderList = (state:AppStateType) => {
    return state.orderList.items
};
export const getFilters = (state:AppStateType) => {
    return state.filter
};