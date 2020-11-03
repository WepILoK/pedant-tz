import {InferActionsTypes} from "./redux-store";

const initialState = {
    typeOfWork: null as null | string,
    phoneNumber: null as null | number,
    paid: false,
};

export const filter = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "SET_TYPE_OF_WORK":
            return {
                ...state,
                typeOfWork: action.payload,
            };
        case "SET_PHONE_NUMBER":
            return {
                ...state,
                phoneNumber: action.payload,
            };
        case "SET_PAID":
            return {
                ...state,
                paid: action.payload,
            };
        default:
            return state;
    }
}
export const actions = {
    setTypeOfWork: (value: string | null) => ({
        type: "SET_TYPE_OF_WORK", payload: value
    } as const),
    setPhoneNumber: (value: number | null) => ({
        type: "SET_PHONE_NUMBER", payload: value
    } as const),
    setPriseOfWork: (value: boolean) => ({
        type: "SET_PAID", payload: value
    } as const),

}

type InitialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof actions>