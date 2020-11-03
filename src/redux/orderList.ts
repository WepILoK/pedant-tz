import axios from "axios";

import {BaseThunkType, InferActionsTypes} from "./redux-store";


const initialState = {
    items: [],
};

export const orderList = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "SET_ORDER_LIST":
            return {
                ...state,
                items: action.payload,
            };
        default:
            return state;
    }
}

export const actions = {
    setOrderList: (items: any) => ({
        type: "SET_ORDER_LIST", payload: items
    } as const),

}
export const fetchOrdersList = (phoneNumber: number | null, typeOfWork: string | null, paid: boolean): ThunkType => (dispatch) => {
    return axios
        .get(`/orderList?${phoneNumber === null ? "" : `q=${phoneNumber}`}${typeOfWork === null ? "" : `&typeOfWork=${typeOfWork}`}${paid === false ? "" : `&paid=${paid}`}`)
        .then(({data}: any) => {
            dispatch(actions.setOrderList(data));
        });
}


type InitialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsType>