import { Component, OnInit } from '@angular/core';
import { FormStatus } from 'src/app/core/enums/form.enums';
import { InputType } from 'src/app/core/enums/input.enums';
import { formControlNames, formLabels } from 'src/app/features/authentification/constants/form.constants';

@Component({
  templateUrl: './clanovi-opcenito.component.html',
  styleUrls: ['./clanovi-opcenito.component.scss']
})
export class ClanoviOpcenitoComponent implements OnInit {
  public formStatus = FormStatus;
  public inputType = InputType;
  public formControlNames = formControlNames;
  public formLabels = formLabels;

  constructor() { }

  ngOnInit(): void {
  }

}
