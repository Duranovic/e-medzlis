export interface DataTableType {
    columns: DataTableColumn [],
    rowActions?: DataTableRowActions [],
    source: DataTableSource [],
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

export interface DataTableSource {
    fieldData: any,
    extraClass?: string,
}