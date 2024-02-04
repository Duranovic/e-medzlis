import { ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'iz-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputComponent implements OnInit, OnDestroy {
  @Input() frmControl: FormControl;
  @Input() type: string;
  @Input() styleApperience: string;
  @Input() label: string;
  @Input() placeholder: string;
  @Input() additionalClasses: string;

  public focusInput: boolean;
  private destroy$ = new Subject<void>();
  
  constructor() { }

  public ngOnInit(): void {
    this.frmControl?.valueChanges.pipe(takeUntil(this.destroy$)).subscribe(formControlValue => {
      formControlValue ? this.focusInput = true : this.focusInput = false;
    })
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
