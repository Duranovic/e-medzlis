import { Component, OnInit } from '@angular/core';
import {formControlNames} from "../../../constants/postavka.constants";
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Postavka} from "../../../../../core/models/postavka.model";
import * as _ from "lodash";
import {StoreService} from "../../../../../core/services/store.service";
import {SaveCancelBarService} from "../../../../../core/services/save-cancel-bar.service";
import {Subscription, switchMap, tap} from "rxjs";
import {map} from "rxjs/operators";
import {Clanarina} from "../../../../../core/models/clanarina.model";

@Component({
  selector: 'iz-dopustenja',
  templateUrl: './dopustenja.component.html',
  styleUrls: ['./dopustenja.component.scss']
})
export class DopustenjaComponent implements OnInit {
  public currentYear = new Date().getFullYear();
  public currentYearClanarina: Clanarina;
  public initialForm: FormGroup;
  public form: FormGroup;
  private subscription: Subscription;

  constructor(public store: StoreService, private saveCancelBarService: SaveCancelBarService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
      this.store.postavke$.subscribe(
        postavke => {
          this.form = this.formBuilder.group(
            {
              postavke: this.formBuilder.array(
                postavke.map(postavka => this.formBuilder.group(
                  {
                    id: [postavka.id, Validators.required],
                    type: [postavka.type, Validators.required],
                    value: [postavka.value, Validators.required],
                  }
                ))
              )
            }
          )
          this.initialForm = _.cloneDeep(this.form);
          this.subscription = this.form.valueChanges.subscribe(() => {
            this.saveCancelBarService.formChanged(this.initialForm, this.form, this.store.updatePostavke.bind(this.store));
          });
        }
      );
  }

public get postavkeFormArray() {
    return this.form.get('postavke') as FormArray;
}

    protected readonly formControlNames = formControlNames;
}
