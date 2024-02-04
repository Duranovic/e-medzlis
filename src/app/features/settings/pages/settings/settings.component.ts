import { Component, OnInit } from '@angular/core';
import { InputType } from 'src/app/core/enums/input.enums';
import {StoreService} from "../../../../core/services/store.service";
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Postavka} from "../../../../core/models/postavka.model";
import * as _ from "lodash";
import {Subscription} from "rxjs";
import {SaveCancelBarService} from "../../../../core/services/save-cancel-bar.service";

@Component({
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  private subscription: Subscription;
  public settingsDescription: string = "Ovdje možete mijenjati postavke aplikacije."

  constructor(public store: StoreService, private saveCancelBarService: SaveCancelBarService, private formBuilder: FormBuilder) { }

  get InputType() {
    return InputType;
  }

  ngOnInit(): void {
  }
}
