import axios from "axios";
import { createStore, createEffect } from 'effector';


type StoreType = {
      key:  string
      name: string
      typeOfWork: string
      phoneNumber: number
      priceOfWork: number
      paid: boolean
}

export const fetchOrdersList = createEffect(async (params: {phoneNumber: number | null, typeOfWork: string | null, paid: boolean}) => {
  return await axios
  .get(`/orderList?${params.phoneNumber === null ? "" : `q=${params.phoneNumber}`}${params.typeOfWork === null ? "" : `&typeOfWork=${params.typeOfWork}`}${params.paid === false ? "" : `&paid=${params.paid}`}`)
  .then(({ data }) => data)
})

export const orderList = createStore<Array<StoreType>>([])
  .on(fetchOrdersList.doneData, (_, res) => res ? res : [])