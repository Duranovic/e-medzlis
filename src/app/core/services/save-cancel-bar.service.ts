import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import * as _ from 'lodash'
import { StoreService } from './store.service';

@Injectable({
  providedIn: 'root'
})
export class SaveCancelBarService {
  private formChanges$ = new Subject<FormGroup | null>();
  public formChanged$?: Observable<FormGroup | null>;
  public initialForm?: FormGroup;
  public form?: FormGroup;
  public action?: (param:any) => void;

  constructor(private st: StoreService) { }

  public formChanged(initialForm: FormGroup, form: FormGroup, action: (param: any) => void): void {
    if(!this.initialForm) {
      this.initialForm = initialForm;
      this.form = form;
      this.action = action;
    }

    this.formChanges$.next(form);
  }

  public getFormChanges(): Observable<FormGroup | null> {
    this.formChanged$ = this.formChanges$.asObservable();
    return this.formChanges$;
  }

  public resetForm(): void {
    this.form?.reset(this.initialForm?.getRawValue());
    this.clearSaveCancel();
  }

  public updateForm(): void {
    if(this.action) {
      this.action(this.form);
      this.clearSaveCancel();
    }
  }

  public clearSaveCancel(): void {
    this.formChanges$.next(null);
    this.formChanged$ = undefined;
    this.action = undefined;
    this.form = undefined;
    this.initialForm = undefined;
  }
}
