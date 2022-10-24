export interface DataTableType {
    columns: DataTableColumn [],
    rowActions?: DataTableRowActions [],
    source: DataTableSource [],
};

interface DataTableColumn {
    title: string,
    dataProperty: string,
    sortable: boolean
};

interface DataTableRowActions {
    label: string,
    actionId: string,
}

interface DataTableSource {
    fieldData: any,
    extraClass?: string,
}