import { createStore, createEvent } from 'effector';

export const filter = createStore({
    typeOfWork: null as null | string,
    phoneNumber: null as null | number,
    paid: false,
})

export const setTypeOfWork = createEvent<string | null>()
export const setPhoneNumber = createEvent<number | null>()
export const setPriseOfWork = createEvent<boolean>()

filter.on(setTypeOfWork, (state, string) => ({...state, typeOfWork: string}))
filter.on(setPhoneNumber, (state, number) => ({...state, phoneNumber: number}))
filter.on(setPriseOfWork, (state, boolean) => ({...state, paid: boolean}))

