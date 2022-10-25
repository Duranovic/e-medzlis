import { ActionRowType } from "../enums/table.enums"

export const tableEditActionRow = {
    actionId: ActionRowType.EDIT,
    label: 'Uredi',
}

export const tableDeleteActionRow = {
    actionId: ActionRowType.DELETE,
    label: 'Izbrisi',
    extraClass: "red-color",
}

export const tableStandardActionRows = [tableEditActionRow, tableDeleteActionRow]