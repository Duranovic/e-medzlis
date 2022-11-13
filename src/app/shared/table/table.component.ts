import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataTableType } from 'src/app/core/models/tableConfig.model';
import { TableService } from 'src/app/core/services/table.service';
import { PlacanjeVM } from 'src/app/features/clanovi/models/placanje.model';

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

  constructor(private router: Router, private tableService: TableService) { 
    console.log(this.router.url)
    // console.log(this.router.getCurrentNavigation()?.previousNavigation);
  }

  public ngOnInit(): void {

  }

  public click(dataRow: PlacanjeVM, index: any): void {
    console.log('DATA ROW: ', dataRow, 'INDEX: ', index);
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
}
