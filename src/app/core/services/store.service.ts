import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map, Observable } from 'rxjs';
import { serverTimestamp } from "firebase/firestore";
import { PlacanjeVM } from 'src/app/features/clanovi/models/placanje.model';
import { GetDocumentWithId } from '../helpers/firebase.helper';
import { Clan } from '../models/clan.model';
import { Dzemat } from '../models/dzemat.model';
import { Placanje } from '../models/placanje.model';
import { SnackbarService } from './snackbar.service';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  public clanovi: Observable<Clan []>;
  public dzemati: Observable<Dzemat []>
  public selectedClan$: Observable<Clan>;
  public selectedEvidencija: Observable<Partial<PlacanjeVM>>;

  constructor(private store: AngularFirestore, private snackbarMessage: SnackbarService) {
    this.clanovi = this.getClanovi();
    this.dzemati = this.getDzemati();
  }

  public setSelectedClan(id: string) {
    return this.selectedClan$ = this.getClan(id);
  }

  public changeClanStatus(id: string) {
    const clanRef = this.store.collection('clanovi').doc(id).ref;

    // Get the document data and store it in a variable
    clanRef.get().then((doc) => {
      if(doc.exists) {
        const docData = doc.data() as { [key: string]: any };

        // Perform any modifications to the data
        const updatedData = {
          ...docData,
          status: !docData['status']
        }
        
        // Update the document in Firestore with the modified data
        return clanRef.set(updatedData);
      } else {
        console.log('Document not found');
        return;
      }
    }).catch((error) => {
      console.error('Error getting or updating document:', error);
    });

  }

  public deleteClan(id: string) {
    this.store.collection('clanovi').doc(id).delete().then(x=> {
      this.snackbarMessage.openSnackbarSuccess('Brisanje uspjesno.', 'Uspjesno izbrisan clan');
    }).catch(x=> {
      this.snackbarMessage.openSnackbarSuccess('Brisanje neuspjesno.', 'Neuspjesno brisanje clana. Pokusajte ponovo.');
    });
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
    return GetDocumentWithId(q);
  }

  public evidentiraj(clanId: string, forYear: number) {
    this.store.collection('placanje').add({
      for_year: forYear,
      clan_id: clanId,
      payment_date: serverTimestamp(),
    })
  }
}
