import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FormStatus } from 'src/app/core/enums/form.enums';
import { InputType } from 'src/app/core/enums/input.enums';
import { Clan } from 'src/app/core/models/clan.model';
import { SaveCancelBarService } from 'src/app/core/services/save-cancel-bar.service';
import { StoreService } from 'src/app/core/services/store.service';
import { formControlNames, formLabels } from 'src/app/features/clanovi/constants/clan.constants';
import * as _ from 'lodash'
import { Subscription } from 'rxjs';

@Component({
  templateUrl: './clanovi-opcenito.component.html',
  styleUrls: ['./clanovi-opcenito.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClanoviOpcenitoComponent implements OnInit, OnDestroy {
  public formStatus = FormStatus;
  public inputType = InputType;
  public formControlNames = formControlNames;
  public formLabels = formLabels;
  public form: FormGroup;
  public initialForm: FormGroup;
  private subscription: Subscription;

  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private store: StoreService, private ch: ChangeDetectorRef, private saveCancelBarService: SaveCancelBarService) { }

  public ngOnInit(): void {
    this.route.parent?.params.subscribe(params => {
      this.store.setSelectedClan((params['id'])).subscribe(value => {
        this.buildForm(value);
        this.ch.detectChanges();
      });
    })
  }

  private buildForm(clan: Clan): void {
    this.form = this.formBuilder.group({
      id: new FormControl(clan.id),
      [this.formControlNames.first_name] : new FormControl(clan.first_name, Validators.required),
      [this.formControlNames.last_name]: new FormControl(clan.last_name, Validators.required),
      [this.formControlNames.date_birth]: new FormControl(clan.birth_year, Validators.required),
      [this.formControlNames.sex]: new FormControl(clan.sex, Validators.required),
      [this.formControlNames.payer]: new FormControl(clan.payer, Validators.required),
      [this.formControlNames.father_name] : new FormControl(clan.father_name, Validators.required),
      [this.formControlNames.mother_name]: new FormControl(clan.mother_name, Validators.required),
      [this.formControlNames.married]: new FormControl(clan.married, Validators.required),
      [this.formControlNames.spouse]: new FormControl(clan.spouseId, Validators.required),
      [this.formControlNames.email]: new FormControl(clan.email, Validators.email),
      [this.formControlNames.phone_number]: new FormControl(clan.phone_number),
      [this.formControlNames.address]: new FormControl(clan.address, Validators.required),
      [this.formControlNames.jmbg]: new FormControl(clan.jmbg, Validators.required),
    })

    this.initialForm = _.cloneDeep(this.form);

    this.subscription = this.form.valueChanges.subscribe(() => {
      this.saveCancelBarService.formChanged(this.initialForm, this.form, this.store.updateClan.bind(this.store));
    });
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
