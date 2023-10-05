import { Component, OnInit } from '@angular/core';
import { InputType } from 'src/app/core/enums/input.enums';

@Component({
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  public settingsDescription: string = "Ovdje možete mijenjati postavke aplikacije."

  constructor() { }

  get InputType() {
    return InputType;
  }

  ngOnInit(): void {
  }

}
