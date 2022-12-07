import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map, Observable } from 'rxjs';
import { PlacanjeVM } from 'src/app/features/clanovi/models/placanje.model';
import { GetDocumentWithId } from '../helpers/firebase.helper';
import { Clan } from '../models/clan.model';
import { Dzemat } from '../models/dzemat.model';
import { Placanje } from '../models/placanje.model';
import { serverTimestamp } from "firebase/firestore"

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  public clanovi: Observable<Clan []>;
  public dzemati: Observable<Dzemat []>
  public selectedClan$: Observable<Clan>;
  public selectedEvidencija: Observable<Partial<PlacanjeVM>>;
  public placanja$: Observable<Placanje []>;

  constructor(private store: AngularFirestore) {
    this.clanovi = this.getClanovi();
    this.dzemati = this.getDzemati();
  }

  public setSelectedClan(id: string) {
    return this.selectedClan$ = this.getClan(id);
  }

  private getClanovi(): Observable<Clan []> {
    const collection = this.store.collection<Clan>('clanovi').snapshotChanges();
    return GetDocumentWithId(collection);
  };

  public getClan(id: string): Observable<Clan | any> {
    return this.clanovi.pipe(
      map((clanovi: Clan[])=>{
        return clanovi.find((clan:Clan) => clan.id === id)
      }),
    )
  }

  private getDzemati(): Observable<Dzemat []> {
    const collection = this.store.collection('dzemati').snapshotChanges();
    return GetDocumentWithId(collection);
  }

  public getPlacanja(clanId: string): Observable<Placanje []> {
    const q = this.store.collection('placanje', ref => ref.where('clan_id', '==', clanId).orderBy('for_year', 'desc')).snapshotChanges();
    this.placanja$ = GetDocumentWithId(q);
    return this.placanja$;
  }

  public evidentiraj(clan_id: string, for_year: number) {
    this.store.collection('placanje').ref.add({
      clan_id,
      for_year,
      payment_date: serverTimestamp(),
    });
  }
}