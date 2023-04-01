import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, filter, fromEvent, Subject, takeUntil, tap } from 'rxjs';

@Component({
  selector: 'iz-search',
  templateUrl: './input-search.component.html',
  styleUrls: ['./input-search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputSearchComponent implements OnInit, OnDestroy {
  @Input() isSmall: boolean = true;
  @Input() placeholder: string;
  @Output() searchTermEvent = new EventEmitter<string>();

  private destroy$ = new Subject<void>();
  public searchControl: FormControl;

  constructor() { }

  public ngOnInit(): void {
    this.searchControl = new FormControl();
    this.searchControl.valueChanges
      .pipe(
        debounceTime(300),
        distinctUntilChanged(),
        takeUntil(this.destroy$)
      ).subscribe((searchTerm) => {
        this.searchTermEvent.emit(searchTerm);
      })
  }

  public ngOnDestroy(): void {
    // Emit a value to the destroy$ Subject, which completes the subscription
    this.destroy$.next();
    // Complete the Subject itself to release resources
    this.destroy$.complete();
  }
}
