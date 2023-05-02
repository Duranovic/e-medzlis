import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { SaveCancelBarService } from 'src/app/core/services/save-cancel-bar.service';

@Component({
  selector: 'iz-save-cancel-bar',
  templateUrl: './save-cancel-bar.component.html',
  styleUrls: ['./save-cancel-bar.component.scss'],
})
export class SaveCancelBarComponent {
  formChanged$: Observable<FormGroup | null> = this.saveCancelBarService.getFormChanges();
  
  constructor(public saveCancelBarService: SaveCancelBarService) { }

  public resetForm(): void {
    this.saveCancelBarService.resetForm();
  }

  public updateForm(): void {
    this.saveCancelBarService.updateForm();
  }
}
