import { Timestamp } from "firebase/firestore";

export interface Placanje {
    id: string,
    clan_id: string,
    for_year: number,
    payment_date: Timestamp,
}