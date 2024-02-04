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
import {Postavka} from "../models/postavka.model";
import {Clanarina} from "../models/clanarina.model";
import firebase from "firebase/compat";
import firestore = firebase.firestore;

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  public clanovi: Observable<Clan[]>;
  public dzemati: Observable<Dzemat[]>
  public selectedClan$: Observable<Clan>;
  public selectedEvidencija: Observable<Partial<PlacanjeVM>>;
  public postavke$: Observable<Postavka[]>
  public clanarine$: Observable<Clanarina[]>;

  // Multi step from
  public createClanForm: FormGroup;
  public createDzematForm: FormGroup;

  constructor(private store: AngularFirestore, private snackbarMessage: SnackbarService) {
    this.clanovi = this.getClanovi();
    this.dzemati = this.getDzemati();
    this.postavke$ = this.getPostavke();
    this.clanarine$ = this.getClanarine();
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
      dzemat_id: new FormControl(null),
    });
  }

  public initCreateDzematForm() {
    this.createDzematForm = new FormGroup({
      name: new FormControl('', Validators.required),
      clan_id: new FormControl('', Validators.required),
    })
  };

  public addNewDzemat(): void {
    let dzematFormRawValue = this.createDzematForm.getRawValue();
    let newDzemat = {
      ...dzematFormRawValue,
      clan_id: dzematFormRawValue.clan_id.id,
    }
    this.store.collection('dzemati').add(newDzemat).then(() => {
      this.snackbarMessage.openSnackbarSuccess('Uspjesno dodat novi dzemat.', `Uspjesno ste dodali dzemat: ${newDzemat.name}.`);
    }).catch(() => {
      this.snackbarMessage.openSnackbarError('Neuspjesno dodavanje dzemata.', `Niste uspjeli dodati novi dzemat - ${newDzemat.name}. Pokusajte ponovo.`)
    });
  }

  public addNewClan(): void {
    let clanFormRawValue = this.createClanForm.getRawValue();
    let newClan = {
      ...clanFormRawValue,
      dzemat_id: clanFormRawValue.dzemat_id.id
    };

    this.store.collection('clanovi').add(newClan).then(() => {
      this.snackbarMessage.openSnackbarSuccess('Uspjesno dodat novi clan.', `Uspjesno ste dodali ${newClan.first_name} ${newClan.last_name}.`);
    }).catch(err => {
      this.snackbarMessage.openSnackbarError('Neuspjesno dodavanje clana.', `Niste uspjeli dodati novog clana - ${newClan.first_name} ${newClan.last_name}. Pokusajte ponovo.`)
    });
  };

  public setSelectedClan(id: string) {
    return this.selectedClan$ = this.getClan(id);
  }

  public changeClanStatus(id: string) {
    const clanRef = this.store.collection('clanovi').doc(id).ref;

    // Get the document data and store it in a variable
    clanRef.get().then((doc) => {
      if (doc.exists) {
        const docData = doc.data() as { [key: string]: any };

        // Perform any modifications to the data
        const updatedData = {
          ...docData,
          status: !docData['status']
        }

        // Update the document in Firestore with the modified data
        return clanRef.set(updatedData).then((x) => {
          this.snackbarMessage.openSnackbarSuccess('Promjena statusa je uspjela.', 'Uspjesna promjena statusa clana.');
        })
      }
      return;
    }).catch(() => {
      this.snackbarMessage.openSnackbarError('Promjena statusa nije uspjela.', 'Neuspjesna promjena statusa clana. Pokusajte ponovo.');
    });

  }

  public deleteClan(id: string) {
    this.store.collection('clanovi').doc(id).delete().then(() => {
      this.snackbarMessage.openSnackbarSuccess('Brisanje uspjesno.', 'Uspjesno izbrisan clan.');
    }).catch(() => {
      this.snackbarMessage.openSnackbarSuccess('Brisanje neuspjesno.', 'Neuspjesno brisanje clana. Pokusajte ponovo.');
    });
  }

  public deleteDzemat(id: string) {
    this.store.collection('dzemati').doc(id).delete().then(() => {
      this.snackbarMessage.openSnackbarSuccess('Brisanje uspjesno.', 'Uspjesno izbrisan dzemat.');
    }).catch(() => {
      this.snackbarMessage.openSnackbarError('Brisanje neuspjesno', 'Neuspjesno brisanje clana. Pokusajte ponovo.')
    })
  }

  private getClanovi(): Observable<Clan[]> {
    const collection = this.store.collection<Clan>('clanovi').snapshotChanges();
    return GetDocumentWithId(collection);
  };

  public getClan(id: string): Observable<Clan | any> {
    return this.clanovi.pipe(
      map((clanovi: Clan[]) => {
        return clanovi.find((clan: Clan) => clan.id === id);
      }),
    )
  }

  public updateClan(clanFormGroup: FormGroup): void {
    let clanId = clanFormGroup?.get('id')?.value;
    let clanRawValue: Clan;

    clanFormGroup.removeControl('id');
    clanRawValue = clanFormGroup.getRawValue();

    this.store.collection('clanovi').doc(clanId).update(clanRawValue).then((x) => {
      this.snackbarMessage.openSnackbarSuccess('Izmjena podataka je uspjelo.', 'Uspjesna izmjena podataka clana.');
    }).catch((err) => {
      this.snackbarMessage.openSnackbarError('Izmjena podataka nije uspjelo.', 'Neuspjesna izmjena podataka clana. Pokusajte ponovo.');
      console.error(err);
    });
  }

  public updatePostavke(formGroup: FormGroup) {
    const postavke = formGroup.get('postavke')?.value;

    postavke.map((postavka: Postavka, index: number) => {
      this.store.collection('postavke').doc(postavka.id).update(postavka);
      this.snackbarMessage.openSnackbarSuccess('Izmjena podataka je uspjelo.', `Uspjesna izmjena za postavke`);
    })
  }

  public updateClanarina(formGroup: FormGroup) {
    const clanarinaRawValue = formGroup.getRawValue();
    if(clanarinaRawValue.id) {
      this.store.collection('clanarine').doc(clanarinaRawValue.id).update({
        iznos: +clanarinaRawValue.iznos,
        godina: +clanarinaRawValue.godina,
      }).then(x=>{
        this.snackbarMessage.openSnackbarSuccess('Izmjena podataka je uspjelo.', `Uspjesna izmijenjen iznos za ${clanarinaRawValue.godina} godinu`);
      });
    } else {
      this.store.collection('clanarine').add({
        iznos: +clanarinaRawValue.iznos,
        godina: +clanarinaRawValue.godina,
      }).then(x=>{
          this.snackbarMessage.openSnackbarSuccess('Izmjena podataka je uspjelo.', `Uspjesna dodat novi iznos za ${clanarinaRawValue.godina} godinu`);
      })
    }
  }

  public getDzemat(id: string): Observable<Dzemat | any> {
    return this.dzemati.pipe(
      map((dzemati: Dzemat[]) => {
        return dzemati.find((clan: Dzemat) => clan.id === id)
      }),
    )
  }

  private getDzemati(): Observable<Dzemat[]> {
    const collection = this.store.collection('dzemati').snapshotChanges();
    return GetDocumentWithId(collection);
  }

  public getPlacanja(clanId: string): Observable<Placanje[]> {
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

  private getPostavke(): Observable<Postavka> | any {
    const postavke = this.store.collection<Postavka>('postavke').snapshotChanges();
    return GetDocumentWithId(postavke);
  }

  private getClanarine(): Observable<Clanarina | any> {
    const clanarine = this.store.collection<Clanarina>('clanarine').snapshotChanges();
    return GetDocumentWithId(clanarine);
  }
}
