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
  @Input() postIndexRoute: string;

  constructor(private router: Router) { 
    // console.log(this.router.getCurrentNavigation()?.previousNavigation);
  }

  public click(index: any): void {
    let finalRoute: string;

    if(this.route) {
      finalRoute = `${this.route}/${index}` + (this.postIndexRoute ? `/${this.postIndexRoute}` : '');
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
