import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { DataTableType } from 'src/app/core/models/tableConfig.model';
import { TableService } from 'src/app/core/services/table.service';

@Component({
  selector: 'iz-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableComponent implements OnInit {
  public actionPanelOpened: boolean = false;

  @Input() data: DataTableType;
  @Input() clickableRow: boolean = true;
  @Input() route: string;
  @Input() postIndexRoute: string;
  @Output() actionEvent = new EventEmitter();

  constructor(private router: Router, private tableService: TableService) { 
    // console.log(this.router.getCurrentNavigation()?.previousNavigation);
  }

  public ngOnInit(): void { }

  public click(dataRow: any): void {
    let finalRoute: string;
    this.tableService.setSelectedElement(dataRow);
    if(this.clickableRow) {
        finalRoute = `${this.route}/${dataRow.id ?? ''}` + (this.postIndexRoute ? `/${this.postIndexRoute}` : '');
        this.router.navigateByUrl(finalRoute);
    }
  }

  public parseField(fieldData: any, dataProperty: string): any {
    if(fieldData[dataProperty]?.value != undefined){
      return fieldData[dataProperty]?.value;
    }
    return fieldData[dataProperty];
  }

  public getExtraClass(fieldData: any, dataProperty: string):any {
    if(fieldData[dataProperty]?.extraClass != undefined) {
      return fieldData[dataProperty]?.extraClass;
    }
    return ''; 
  }

  public getTypeOfHtmlELement(fieldData: any, dataProperty: string): any {
      return fieldData[dataProperty]?.typeOfElement;
  }

  public openActionPanel(): void {
    this.actionPanelOpened = true;
  }

  public trackByFn(index: number, item: any): any {
    // Use the item's ID as the unique identifier
    return item.id;
  }

  public callActionFromPanel({actionId, entityId}: any) {
    this.actionEvent.emit({
      actionId,
      entityId
    })
  }
}
