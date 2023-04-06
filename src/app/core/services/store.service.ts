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
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  public clanovi: Observable<Clan []>;
  public dzemati: Observable<Dzemat []>
  public selectedClan$: Observable<Clan>;
  public selectedEvidencija: Observable<Partial<PlacanjeVM>>;

  // Multi form step
  public createClanForm: FormGroup;

  constructor(private store: AngularFirestore, private snackbarMessage: SnackbarService) {
    this.clanovi = this.getClanovi();
    this.dzemati = this.getDzemati();
  }

  public initCreateClanForm() {
    // TODO: Should create form array with two seperated form groups
    this.createClanForm = new FormGroup({
      // First form step
      first_name: new FormControl('', Validators.required),
      last_name: new FormControl('', Validators.required),
      year_of_birth: new FormControl(null, Validators.required),
      address: new FormControl('', Validators.required),
      sex: new FormControl('', Validators.required),
  
      // Second form step
      year_registrered: new FormControl(null, [Validators.min(1900), Validators.max(new Date().getFullYear())]),
      payer: new FormControl(false, Validators.required),
      jmbg: new FormControl('', [Validators.minLength(13), Validators.maxLength(13)]),
      father_name: new FormControl(''),
      mother_name: new FormControl(''),
      married: new FormControl(false),
      spouse_id: new FormControl(null),
      phone_number: new FormControl(null),
      email: new FormControl(null),
      dzemat_id: new FormControl('KxptPSlbcOFdHmfaBJKO'),
    });
  }

  public addNewClan(): boolean {
    let clanFormRawValue = this.createClanForm.getRawValue();
    let newClan = {
      ...clanFormRawValue,
      dzemat_id: clanFormRawValue.dzemat_id.id
    };

    let returnValue = false;
    this.store.collection('clanovi').add(newClan).then(success => {
      this.snackbarMessage.openSnackbarSuccess('Uspjesno dodat novi clan.', `Uspjesno ste dodali ${newClan.first_name} ${newClan.last_name}.`);
      returnValue = true;
    }).catch(err => {
      this.snackbarMessage.openSnackbarError('Neuspjesno dodavanje clana.', `Niste uspjeli dodati novog clana - ${newClan.first_name} ${newClan.last_name}. Pokusajte ponovo.`)
      returnValue = false;
    });
    return returnValue;
  };

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
        return clanRef.set(updatedData).then((x)=> {
          this.snackbarMessage.openSnackbarSuccess('Promjena statusa je uspjela.', 'Uspjesna promjena statusa clana.');
        })
      } 
      return;
    }).catch(() => {
      this.snackbarMessage.openSnackbarError('Promjena statusa nije uspjela.', 'Neuspjesna promjena statusa clana. Pokusajte ponovo.');
    });

  }

  public deleteClan(id: string) {
    this.store.collection('clanovi').doc(id).delete().then(x=> {
      this.snackbarMessage.openSnackbarSuccess('Brisanje uspjesno.', 'Uspjesno izbrisan clan');
    }).catch(() => {
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
