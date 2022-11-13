import { Evidention, ObligationFulfilled } from "../models/placanje.model";

export const obligationFulfilledErrorConstant: ObligationFulfilled = {
    value: "NE",
    extraClass: "info error",
};

export const obligationFulfilledSuccessConstant: ObligationFulfilled = {
    value: "DA",
    extraClass: "info success",
};

export const evidentionConstant: Evidention = {
    value: "Evidentiraj",
    extraClass: "button gray",
    typeOfElement: 'button',
}