import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { DataTableType } from 'src/app/core/models/tableConfig.model';

@Component({
  selector: 'iz-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableComponent {
  public actionPanelOpened: boolean = false;
  @Input() data: DataTableType;
  @Input() route: string;

  constructor(private router: Router) { 
    // console.log(this.router.getCurrentNavigation()?.previousNavigation);
  }

  public click(index: any): void {
    if(this.route) 
      this.router.navigateByUrl(`${this.route}/${index}`);
  }

  public parseField(fieldData: any, dataProperty: string): any {
    if(fieldData[dataProperty]?.value != undefined){
      return fieldData[dataProperty]?.value;
    }
    return fieldData[dataProperty];
  }

  public getExtraClass(fieldData: any, dataProperty: string):any {
    if(fieldData[dataProperty]?.extraClass != undefined){
      return fieldData[dataProperty]?.extraClass;
    }
    return ''; 
  }

  public openActionPanel(): void {
    this.actionPanelOpened = true;
  }
}
