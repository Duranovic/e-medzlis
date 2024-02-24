import { ActionRowEnum } from "../enums/table.enums"

export const tableChangeStatusActionRow = {
    actionId: ActionRowEnum.SET_ACTIVE,
    label: 'Promijeni status',
}

export const tableDeleteActionRow = {
    actionId: ActionRowEnum.DELETE,
    label: 'Izbriši',
    extraClass: "red-color",
}

export const tableStandardActionRows = [tableChangeStatusActionRow, tableDeleteActionRow]
