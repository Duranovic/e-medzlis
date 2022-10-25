import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { ActionRowType } from 'src/app/core/enums/table.enums';
import { DataTableRowActions } from 'src/app/core/models/tableConfig.model';

@Component({
  selector: 'iz-action-panel',
  templateUrl: './action-panel.component.html',
  styleUrls: ['./action-panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class ActionPanelComponent {
  public isOpened: boolean;

  @Input() actions: DataTableRowActions[];
  constructor(private ch: ChangeDetectorRef) { }

  public openPanel($event: MouseEvent | PointerEvent): void {
    this.isOpened = true;
    $event.stopPropagation();
  }

  public closePanel($event: MouseEvent | PointerEvent): void {
    this.isOpened = false;
    $event.stopPropagation();
  }

  public edit($event: MouseEvent | PointerEvent): void {
    this.closePanel($event);
    console.log("EDIT ACTION");
  }

  public delete($event: MouseEvent | PointerEvent): void {
    this.closePanel($event);
    console.log("DELETE ACTOION");

  }

  public callSpecificMethod(methodName: string, $event: MouseEvent | PointerEvent): void {
    switch (methodName) {
      case ActionRowType.EDIT:
        this.edit($event);
        break;
      case ActionRowType.DELETE:
        this.delete($event);
        break;
      default:
        console.log("YOU DON'T HAVE ANY METHOD DEFINED BY THAT NAME!!");
        break;
    }
  }

}
