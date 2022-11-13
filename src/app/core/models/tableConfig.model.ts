import { Observable } from "rxjs"

export interface DataTableType {
    columns: DataTableColumn [],
    rowActions?: DataTableRowActions [],
    source: Observable<any []>, // It can be different models
    rowAction?: string,
};

export interface DataTableColumn {
    title: string,
    dataProperty: string,
    sortable: boolean
};

export interface DataTableRowActions {
    label: string,
    actionId: string,
    extraClass?: string,
    typeOfElement?: HTMLElement
}