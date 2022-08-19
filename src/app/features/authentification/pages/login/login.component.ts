import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FormStatus } from 'src/app/core/enums/form.enums';
import { InputType } from 'src/app/core/enums/input.enums';
import { formControlNames, formLabels } from '../../constants/form.constants';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public form: FormGroup;
  public formStatus = FormStatus;
  public inputType = InputType;
  public formControlNames = formControlNames;
  public formLabels = formLabels;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {    
    this.form = this.formBuilder.group({
      [this.formControlNames.username]: new FormControl('', Validators.required),
      [this.formControlNames.password]: new FormControl('', Validators.required),
      [this.formControlNames.remember_me]: new FormControl(false),
    })
  }
}
