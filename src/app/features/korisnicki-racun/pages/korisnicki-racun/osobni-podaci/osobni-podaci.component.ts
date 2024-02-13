import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Korisnik } from "../../../../../core/models/korisnik.model";
import { InputType } from "../../../../../core/enums/input.enums";
import {Subscription} from "rxjs";
import {cloneDeep} from "lodash";
import {StoreService} from "../../../../../core/services/store.service";
import {SaveCancelBarService} from "../../../../../core/services/save-cancel-bar.service";

@Component({
  selector: 'iz-osobni-podaci',
  templateUrl: './osobni-podaci.component.html',
  styleUrls: ['./osobni-podaci.component.scss']
})
export class OsobniPodaciComponent implements OnInit {
  @Input() osobniPodaci: Korisnik;
  private subscription: Subscription;
  form: FormGroup;
  initialForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private store: StoreService, private saveCancelBarService: SaveCancelBarService) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      id: [this.osobniPodaci.id],
      first_name: [this.osobniPodaci?.first_name ?? '', [Validators.required]],
      last_name: [this.osobniPodaci?.last_name ?? '', [Validators.required]],
      jmbg: [this.osobniPodaci?.jmbg ?? '', [Validators.min(13), Validators.maxLength(13)]]
    })

    this.initialForm = cloneDeep(this.form);

    this.subscription = this.form.valueChanges.subscribe(()=>{
      this.saveCancelBarService.formChanged(this.initialForm, this.form, this.store.updateKorisnik.bind(this.store))
    })
  }

  protected readonly InputType = InputType;
}
