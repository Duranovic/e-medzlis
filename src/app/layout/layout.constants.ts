import {ActionRowEnum} from "../core/enums/table.enums";

export const navigation_links = [
    ['home', 'pocetna'],
    ['people', 'clanovi'],
    ['reports', 'dzemati'],
    ['graph', 'statistika'],
    ['settings', 'postavke'],
] as [string, string][];

export const layoutOpenProfileActionRow = {
  actionId: ActionRowEnum.OPEN_PROFILE,
  label: 'Otvroi korisnicki racun',
}

export const layoutLogOutActionRow = {
  actionId: ActionRowEnum.LOG_OUT,
  label: 'Odjavi se',
}

export const layoutStandardActionRows = [layoutOpenProfileActionRow, layoutLogOutActionRow]
