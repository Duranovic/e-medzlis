import { Observable } from "rxjs"

export interface DataTableType {
    columns: DataTableColumn [],
    rowActions?: DataTableRowActions [],
    emptyData?: string,
    source: Observable<any []>, // It can be different models
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