export interface DataTableType {
    columns: DataTableColumn [],
    rowActions?: DataTableRowActions [],
    source: any [], // It can be different models
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
}