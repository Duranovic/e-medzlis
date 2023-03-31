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

export const snackbarEvidentionSuccess = {
    title: 'Plaćanje članarine uspješno evidentirano.',
    description: 'Uspješno evidentirano plaćanje za odabranu godinu.'
}

export const snackbarEvidentionError = {
    title: 'Plaćanje članarine nije moguce evidentirati evidentirati.',
    description: 'Nije moguce evidentirati plaćanje za odabranu godinu. Sacekajte malo i pokusajte ponovo.'
}