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
  @Input() data: DataTableType;

  constructor(private router: Router) { 
    // console.log(this.router.getCurrentNavigation()?.previousNavigation);
  }

  public click(index: any): void{
    this.router.navigateByUrl(`/dzemati/${index}`);
  }

  public parseField(fieldData: any, dataProperty: string) {
    if(fieldData[dataProperty]?.value != undefined){
      return fieldData[dataProperty]?.value;
    }
    return fieldData[dataProperty];
  }

  public getExtraClass(fieldData: any, dataProperty: string){
    if(fieldData[dataProperty]?.extraClass != undefined){
      return fieldData[dataProperty]?.extraClass;
    }
    return ''; 
  }
}
