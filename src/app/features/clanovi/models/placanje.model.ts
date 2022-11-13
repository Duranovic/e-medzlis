import { Timestamp } from "firebase/firestore";

export interface PlacanjeVM {
    id?: string,
    for_year: number;
    obligationFulfilled: ObligationFulfilled
    evidention?: Evidention
    payment_date?: string,
    clan_id?: string;
}

export interface Evidention {
    value: string,
    extraClass: string,
    typeOfElement: string,
}

export interface ObligationFulfilled {
    value: string,
    extraClass: string,
}