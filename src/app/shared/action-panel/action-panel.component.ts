import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { DataTableRowActions } from 'src/app/core/models/tableConfig.model';

@Component({
  selector: 'iz-action-panel',
  templateUrl: './action-panel.component.html',
  styleUrls: ['./action-panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ActionPanelComponent {
  public isOpened: boolean;
  @Input() actions: DataTableRowActions[];
  @Input() data: any;
  @Output() actionEvent = new EventEmitter()

  constructor() { }

  public togglePanel($event: MouseEvent | PointerEvent): void {
    this.isOpened = !this.isOpened;
    $event.stopPropagation();
  }

  public callAction(actionId: string, $event: MouseEvent | PointerEvent): void {
      this.togglePanel($event);
      this.actionEvent.emit({
        actionId,
        entityId: this.data.id
      })
  }
}
