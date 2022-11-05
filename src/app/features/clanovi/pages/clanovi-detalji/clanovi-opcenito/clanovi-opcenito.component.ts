import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FormStatus } from 'src/app/core/enums/form.enums';
import { InputType } from 'src/app/core/enums/input.enums';
import { formControlNames, formLabels } from 'src/app/features/clanovi/constants/clan.constants';

@Component({
  templateUrl: './clanovi-opcenito.component.html',
  styleUrls: ['./clanovi-opcenito.component.scss']
})
export class ClanoviOpcenitoComponent implements OnInit {
  public formStatus = FormStatus;
  public inputType = InputType;
  public formControlNames = formControlNames;
  public formLabels = formLabels;
  public form: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  public ngOnInit(): void {
    this.buildForm();
  }

  private buildForm(): void {
    this.form = this.formBuilder.group({
      [this.formControlNames.first_name] : new FormControl('', Validators.required),
      [this.formControlNames.last_name]: new FormControl('', Validators.required),
      [this.formControlNames.date_birth]: new FormControl('', Validators.required),
      [this.formControlNames.sex]: new FormControl('M', Validators.required),
      [this.formControlNames.payer]: new FormControl(true, Validators.required),
      [this.formControlNames.father_name] : new FormControl('', Validators.required),
      [this.formControlNames.mother_name]: new FormControl('', Validators.required),
      [this.formControlNames.married]: new FormControl(true, Validators.required),
      [this.formControlNames.spouse]: new FormControl('', Validators.required),
      [this.formControlNames.email]: new FormControl('', Validators.email),
      [this.formControlNames.phone_number]: new FormControl(''),
      [this.formControlNames.address]: new FormControl('', Validators.required),
      [this.formControlNames.jmbg]: new FormControl('2904998163300', Validators.required),
    })
  }
}
