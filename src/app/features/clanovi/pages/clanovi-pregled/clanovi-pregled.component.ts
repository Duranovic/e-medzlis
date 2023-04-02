import { Component, OnInit } from '@angular/core';
import { Subject, takeUntil, tap } from 'rxjs';
import { StoreService } from 'src/app/core/services/store.service';

@Component({
  templateUrl: './clanovi-pregled.component.html',
  styleUrls: ['./clanovi-pregled.component.scss']
})
export class ClanoviPregledComponent implements OnInit {
  public clanoviCount: number = 0;
  private _destroy$ = new Subject<void>();

  constructor(private _store: StoreService) { }

  get countMessage(): string {
    return `${this.clanoviCount} ${this.clanoviCount < 10 ? 'clana prikazano' : 'clanova prikazano'}`;
  }

  public ngOnInit(): void {
    this._store.clanovi.pipe(
      takeUntil(this._destroy$),
      tap(clanovi => {
        this.clanoviCount = clanovi.length;
      })).subscribe();
  }

  public ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete();
  }
}
