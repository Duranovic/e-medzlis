import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {InputType} from "../../../../../core/enums/input.enums";
import {Korisnik} from "../../../../../core/models/korisnik.model";
import * as _ from "lodash";
import {Subscription} from "rxjs";
import {SaveCancelBarService} from "../../../../../core/services/save-cancel-bar.service";
import {StoreService} from "../../../../../core/services/store.service";

@Component({
  selector: 'iz-racun',
  templateUrl: './racun.component.html',
  styleUrls: ['./racun.component.scss']
})
export class RacunComponent implements OnInit {
  @Input() racun: Korisnik;
  private subscription: Subscription= new Subscription();
  form: FormGroup;
  initialForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private saveCancelBarService: SaveCancelBarService, private store: StoreService) { }

  ngOnInit(): void {
    console.log(this.racun);
    this.form = this.formBuilder.group({
      id: [this.racun.id],
      email: [this.racun?.email ?? '', Validators.email],
      password: [''],
      repeatPassword: [''],
    })

    this.initialForm = _.cloneDeep(this.form);
    this.subscription = this.form.valueChanges.subscribe(() => {
      this.saveCancelBarService.formChanged(this.initialForm, this.form, this.store.updateKorisnik.bind(this.store));
    });
  }

  protected readonly InputType = InputType;
}
